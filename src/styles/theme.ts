import 'styled-components';

const theme = {
  colors: {
    primary: '#00a7c1',
    primaryHover: '#63B6C9',
    primaryLight: '#D7FEFE',
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
