import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const ArrowDownSvg = ({
  fill = '#000000',
  width = 20,
  height = 20,
  $position = 'static',
}: ArrowDownSvgProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <Path
        fill={fill}
        d="M10.8 2H9.2v13.2l-5.1-5-1.1 1 7 6.8 7-6.7-1-1-5.2 4.9V2z"
      />
    </Svg>
  </SvgWrapper>
);

type ArrowDownSvgProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
