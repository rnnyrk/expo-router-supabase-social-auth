import Svg, { Path } from 'react-native-svg';

import theme from '@styles/theme';

import { SvgWrapper } from './styled';

export const Add = ({ width = 20, height = 20, $position = 'static' }: AddProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 397.4 443.4"
    >
      <Path
        d="M371.6 92.9C354.5 64.2 331 41.6 301.2 25S237.3 0 199 0c-38.4 0-72.5 8.3-102.3 25C66.9 41.6 43.3 64.3 26 92.9 8.7 121.6 0 154.4 0 191.3c0 37 8.7 69.8 26 98.4 17.3 28.7 40.9 51.3 70.7 68 26.7 14.9 56.8 23.1 90.4 24.7l-9.1 19.9c-6.1 13.2-1.3 28.9 11.1 36.6l1.5.9c9.1 5.6 20.9 4.6 28.9-2.5l116.7-104.2c13.9-12.5 25.8-26.9 35.6-43.3 17.1-28.7 25.6-61.4 25.6-98.4-.1-37-8.7-69.8-25.8-98.5z"
        fill={theme.colors.primary}
      />
      <Path
        fill="#FFFFFF"
        d="M96 171.1h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H96c-12 0-21.8-9.7-21.8-21.8v-6c0-12.1 9.8-21.8 21.8-21.8z"
      />
      <Path
        fill="#FFFFFF"
        d="M223.4 93.1v205.3c0 12-9.7 21.8-21.8 21.8h-6c-12 0-21.8-9.7-21.8-21.8V93.1c0-12 9.7-21.8 21.8-21.8h6c12.1.1 21.8 9.8 21.8 21.8z"
      />
    </Svg>
  </SvgWrapper>
);

type AddProps = {
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
