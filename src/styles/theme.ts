import 'styled-components';

const theme = {
  colors: {
    primary: '#61C4E3',
    primaryHover: '#31B2DB',
    primaryLight: '#A6DEEF',
    black: '#1D191F',
    gray: '#CCCCCC',
    gray800: '#808080',
    white: '#FFFFFF',
    orange: '#F6662B',
    red: '#EB3456',
  },

  ui: {
    borderRadius: {
      card: '32px',
      badge: '12px',
      button: '16px',
      buttonSmall: '8px',
    },
    shadows: '0px 6px 6px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)',
  },
} as const;

export default theme;
