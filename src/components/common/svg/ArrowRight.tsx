import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const ArrowRight = ({
  fill = '#000000',
  width = 20,
  height = 20,
  $position = 'static',
}: ArrowRightSvgProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 248.9 206.3"
    >
      <Path
        fill={fill}
        d="M21.8 79.1h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H21.8C9.8 128.7 0 119 0 106.9v-6c0-12.1 9.8-21.8 21.8-21.8z"
      />
      <Path
        fill={fill}
        d="M128.3 165.7l79.2-79.2c7.5-7.5 19.8-7.5 27.3 0l7.7 7.7c7.5 7.5 7.5 19.8 0 27.3l-79.2 79.2c-7.5 7.5-19.8 7.5-27.3 0l-7.7-7.7c-7.6-7.5-7.6-19.7 0-27.3z"
      />
      <Path
        fill={fill}
        d="M163.3 5.6l79.2 79.2c7.5 7.5 7.5 19.8 0 27.3l-7.7 7.7c-7.5 7.5-19.8 7.5-27.3 0l-79.2-79.2c-7.5-7.5-7.5-19.8 0-27.3l7.7-7.7c7.5-7.5 19.7-7.5 27.3 0z"
      />
    </Svg>
  </SvgWrapper>
);

type ArrowRightSvgProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
