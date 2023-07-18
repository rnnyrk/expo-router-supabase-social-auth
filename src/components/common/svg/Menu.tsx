import Svg, { Path } from 'react-native-svg';

import theme from '@styles/theme';

import { SvgWrapper } from './styled';

export const Menu = ({
  fill = theme.colors.primary,
  width = 20,
  height = 20,
  $position = 'static',
}: MenuProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 248.9 219.9"
    >
      <Path
        d="M21.8 85.2h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H21.8C9.8 134.8 0 125.1 0 113v-6c0-12.1 9.8-21.8 21.8-21.8zM21.8 0h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H21.8C9.8 49.6 0 39.9 0 27.8v-6C0 9.7 9.8 0 21.8 0zM21.8 170.3h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H21.8c-12 0-21.8-9.7-21.8-21.8v-6c0-12 9.8-21.8 21.8-21.8z"
        fill={fill}
      />
    </Svg>
  </SvgWrapper>
);

type MenuProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
