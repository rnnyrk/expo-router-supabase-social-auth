import Svg, { Path } from 'react-native-svg';

import theme from '@styles/theme';

import { SvgWrapper } from './styled';

export const Bubble = ({
  strokeColor = theme.colors.primary,
  fill = 'none',
  width = 200,
  height = 200,
  $position = 'static',
}: BubbleProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 945.3 1053.1"
    >
      <Path
        d="M876.9 225.6c-40-66.9-94.8-119.9-164.5-158.8S563.1 8.5 473.5 8.5c-89.7 0-169.3 19.4-239 58.3S109.8 158.6 69.3 225.6 8.5 369.2 8.5 455.6c0 86.5 20.3 163.1 60.8 230 40.5 67 95.6 119.9 165.2 158.8 62.4 34.8 132.8 54 211.2 57.7l-21.3 46.5c-14.2 30.9-3.1 67.6 25.9 85.5l3.4 2.1c21.3 13.2 48.7 10.7 67.4-5.9l272.7-243.5c32.5-29.1 60.3-62.8 83.1-101.1 39.9-66.9 59.9-143.6 59.9-230 0-86.5-20-163.1-59.9-230.1z"
        fill={fill}
        stroke={strokeColor}
        strokeWidth={17}
        strokeMiterlimit={10}
      />
    </Svg>
  </SvgWrapper>
);

type BubbleProps = {
  strokeColor?: string;
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
