import { mixins } from 'lib/style';

export const menuWidth = '240px';
export const menuWidthTablet = '40px';
export const iconSizeM = '24px';
// const containerWidth = '1920px';

// export const container = mixins.container({ width: containerWidth });

const fontCommon = {
  fontFamily: mixins.systemFontStack,
  // '-webkit-font-smoothing': 'antialiased',
};

export const fontNormal400 = { ...fontCommon, fontWeight: 400 };
export const fontBold700 = { ...fontCommon, fontWeight: 700 };

const breakpoints = {
  md: 768,
  lg: 1024,
};

export const mediaBreakPointUp = {
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
};

export const fontSizes = {
  xxs: '12px',
  xs: '13px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  l:"22px",
  xl: '24px',
  xxl: '32px',
};

export const palette = {
  // https://developer.microsoft.com/en-us/fabric#/styles/themegenerator
  themePrimary: '#229eff',
  themeLighterAlt: '#f6fbff',
  themeLighter: '#dcf0ff',
  themeLight: '#bce2ff',
  themeTertiary: '#7ac5ff',
  themeSecondary: '#3caaff',
  themeDarkAlt: '#1e8fe6',
  themeDark: '#1979c2',
  themeDarker: '#13598f',
  neutralLighterAlt: '#f9f9f9',
  neutralLighter: '#f4f4f4',
  neutralLight: '#eaeaea',
  neutralQuaternaryAlt: '#dadada',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c8c8',
  neutralTertiary: '#c2c2c2',
  neutralSecondary: '#858585',
  neutralPrimaryAlt: '#4b4b4b',
  neutralPrimary: '#333333',
  neutralDark: '#272727',
  black: '#1d1d1d',
  white: '#ffffff',
  // custom
  danger: '#fc6670',
};
