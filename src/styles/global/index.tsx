import { createGlobalStyle } from "styled-components";

export const colorPrimitives = {
  gray: {
    10: "#FAFAFA",
    50: "#F2F2F2",
    100: "#F8FAFC",
    200: "#F1F5F9",
    300: "#E2E8F0",
    400: "#CBD5E1",
    500: "#C2C2C2",
    600: "#64748B",
    700: "#475569",
    800: "#334155",
    900: "#1E293B",
  },
  orange: {
    100: "#FFE6CC",
    200: "#FFCC99",
    300: "#FFB366",
    400: "#FF851B",
    500: "#FF550C",
    600: "#C34813",
  },
};

export const themeColors = {
  white: { itself: "#FFFFFF" },
  black: { itself: "#000000" },
  grayText: colorPrimitives.gray[500],
  backgroundColor: { itself: "#090402" },
  borderColor: "hsla(0, 0%, 100%, .06)",
  elementBackground: "hsla(0, 0%, 100%, .1)",
  ...colorPrimitives,
};

export const genericStyles = {
  borderRadius: "10px",
  transition: "all .3s ease",
};

export const devices = {
  mobile: 767,
  tablet: 1023,
  largeTablet: 1024,
  desktopSmall: 1299,
};

export const breakpoints = {
  mobile: `(max-width:${devices.mobile}px)`,
  tablet: `(max-width:${devices.tablet}px)`,
  largeTablet: `(max-width:${devices.largeTablet}px)`,
  desktopSmall: `(max-width:${devices.desktopSmall}px)`,
};

export const fonts = {
  primary: "'HelveticaNowDisplay', 'Helvetica Neue', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Light.eot');
      src: url('./fonts/HelveticaNowDisplay-Light.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Light.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Light.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Light.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Light.svg#HelveticaNowDisplay-Light') format('svg');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Medium.eot');
      src: url('./fonts/HelveticaNowDisplay-Medium.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Medium.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Medium.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Medium.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Medium.svg#HelveticaNowDisplay-Medium') format('svg');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Regular.eot');
      src: url('./fonts/HelveticaNowDisplay-Regular.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Regular.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Regular.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Regular.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Regular.svg#HelveticaNowDisplay-Regular') format('svg');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Thin.eot');
      src: url('./fonts/HelveticaNowDisplay-Thin.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Thin.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Thin.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Thin.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Thin.svg#HelveticaNowDisplay-Thin') format('svg');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-ExtLt.eot');
      src: url('./fonts/HelveticaNowDisplay-ExtLt.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-ExtLt.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-ExtLt.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-ExtLt.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-ExtLt.svg#HelveticaNowDisplay-ExtLt') format('svg');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-ExtraBold.eot');
      src: url('./fonts/HelveticaNowDisplay-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-ExtraBold.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-ExtraBold.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-ExtraBold.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-ExtraBold.svg#HelveticaNowDisplay-ExtraBold') format('svg');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Bold.eot');
      src: url('./fonts/HelveticaNowDisplay-Bold.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Bold.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Bold.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Bold.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Bold.svg#HelveticaNowDisplay-Bold') format('svg');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'HelveticaNowDisplay';
      src: url('./fonts/HelveticaNowDisplay-Black.eot');
      src: url('./fonts/HelveticaNowDisplay-Black.eot?#iefix') format('embedded-opentype'),
          url('./fonts/HelveticaNowDisplay-Black.woff2') format('woff2'),
          url('./fonts/HelveticaNowDisplay-Black.woff') format('woff'),
          url('./fonts/HelveticaNowDisplay-Black.ttf') format('truetype'),
          url('./fonts/HelveticaNowDisplay-Black.svg#HelveticaNowDisplay-Black') format('svg');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.primary};
    font-style: normal;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    align-items: flex-start;


    color-scheme: light dark;
    color: ${themeColors.white.itself};
    background-color: ${themeColors.backgroundColor.itself};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    
  }

  button {
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  p {
    margin: 0 0 1em;
  }
  
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
