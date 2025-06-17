import { useField, useFormikContext } from "formik";
import * as React from "react";
import type { ConverterFormInterface } from "../../converter";
import { useEffect, useRef, useState } from "react";
import { Input } from "./styled.tsx";

interface Props {
  name: string;
  placeholder?: string;
  locale?: string;
  decimals?: number;
  className?: string;
}

const getSeparators = (locale: string) => {
  const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
  const group = parts.find((p) => p.type === "group")?.value ?? ",";
  const decimal = parts.find((p) => p.type === "decimal")?.value ?? ".";
  return { group, decimal };
};

const parseNumber = (input: string, locale: string): number | "" => {
  const { group, decimal } = getSeparators(locale);

  const normalized = input
    .replace(new RegExp(`\\${group}`, "g"), "") // remove group sep
    .replace(new RegExp(`\\${decimal}`), "."); // normalize decimal to dot

  const parsed = parseFloat(normalized);
  return isNaN(parsed) ? "" : parsed;
};

function NumericInput({
  name,
  placeholder,
  locale = navigator.language, // Get user locale
  decimals = 2,
  className = "",
}: Props) {
  // Not a typo, meta would be the second variable but is unused and eslint screams :D
  const [field, , helpers] = useField(name);
  const formik = useFormikContext<ConverterFormInterface>();
  const { value } = field;
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState("");
  const separators = getSeparators(locale);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync from Formik value (on init or external change)
  useEffect(() => {
    if (
      typeof value === "number" &&
      document.activeElement !== inputRef.current
    ) {
      const formatted = new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value);
      setInputValue(formatted);
    }
  }, [value, locale, decimals]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // Allow only digits, decimal separator, and backspace
    const regex = new RegExp(
      `^[0-9\\${separators.decimal}\\${separators.group}]*$`,
    );
    if (!regex.test(raw) && raw !== "") return;

    setInputValue(raw);

    const parsed = parseNumber(raw, locale);
    void setValue(parsed);
    void formik.setFieldTouched(name, true, false);
    void formik.setFieldValue("_lastChanged", name, false);
  };

  const handleBlur = () => {
    if (typeof value === "number") {
      const formatted = new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value);
      setInputValue(formatted);
    }
  };

  return (
    <Input
      ref={inputRef}
      type="text"
      inputMode="decimal"
      className={className}
      name={name}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
}

export default NumericInput;
