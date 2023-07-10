import type * as i from 'types';

import theme from './theme';

export type Theme = typeof theme;

// Add Theme type to styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends i.Theme {}
}

export type BaseStyled = {
  theme?: i.Theme;
  className?: string;
};

// Get color strings from theme
export type ThemeColors = keyof typeof theme.colors;

// Get subcolors from colors if they exist
export type SubThemeColors = {
  [color in i.ThemeColors]: Exclude<keyof (typeof theme.colors)[color], keyof string>;
};

// Ensures colors exist in theme
export type ColorsFromTheme<Colors extends i.ThemeColors> = Colors;

// Ensures subcolor exists in color object
export type SubcolorsFromColor<Color extends i.ThemeColors> = i.SubThemeColors[Color];

// Ensures subcolor exists in theme
export type SubcolorFromTheme<
  Colors extends i.ThemeColors,
  Subcolors extends i.SubcolorsFromColor<Colors>,
> = [Colors, Subcolors];
