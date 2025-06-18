import { useField, useFormikContext } from "formik";
import * as React from "react";
import type { ConverterFormInterface } from "../../converter";
import { useEffect, useRef, useState } from "react";
import { Input } from "./styled.tsx";
import {
  formatNumber,
  getSeparators,
  parseNumber,
} from "../../../utils/helpers.ts";

interface Props {
  name: string;
  placeholder?: string;
  locale?: string;
  decimals?: number;
  className?: string;
}

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
      setInputValue(formatNumber(value, locale, decimals));
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
      setInputValue(formatNumber(value, locale, decimals));
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
