import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const ArrowLeft = ({
  fill = '#000000',
  width = 20,
  height = 20,
  $position = 'static',
}: ArrowLeftSvgProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 249 207"
    >
      <Path
        d="M227.1 79.1H21.8C9.8 79.1 0 88.8 0 100.9v6c0 12 9.7 21.8 21.8 21.8h205.3c12 0 21.8-9.7 21.8-21.8v-6c0-12.1-9.8-21.8-21.8-21.8z"
        fill={fill}
      />
      <Path
        d="M120.6 165.7L41.4 86.5c-7.5-7.5-19.8-7.5-27.3 0l-7.7 7.7c-7.5 7.5-7.5 19.8 0 27.3l79.2 79.2c7.5 7.5 19.8 7.5 27.3 0l7.7-7.7c7.6-7.5 7.6-19.7 0-27.3z"
        fill={fill}
      />
      <Path
        d="M85.6 5.6L6.4 84.8c-7.5 7.5-7.5 19.8 0 27.3l7.7 7.7c7.5 7.5 19.8 7.5 27.3 0l79.2-79.2c7.5-7.5 7.5-19.8 0-27.3l-7.7-7.7c-7.5-7.5-19.7-7.5-27.3 0z"
        fill={fill}
      />
    </Svg>
  </SvgWrapper>
);

type ArrowLeftSvgProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
