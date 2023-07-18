import Svg, { G, Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const Apple = ({ width, height, style }: AppleProps) => (
  <SvgWrapper
    style={style}
    $position="static"
  >
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 22"
    >
      <G>
        <Path
          fill="#c0c0c0"
          fillRule="nonzero"
          d="M6.172 22C2.795 21.981.001 15.297.001 11.893c0-5.56 4.303-6.777 5.96-6.777.748 0 1.546.284 2.25.536.492.176 1 .357 1.284.357.17 0 .569-.154.921-.29.752-.29 1.688-.65 2.777-.65h.007c.813 0 3.28.173 4.763 2.332l.347.506-.5.365c-.714.523-2.017 1.476-2.017 3.363 0 2.236 1.475 3.096 2.184 3.51.313.182.637.37.637.782 0 .268-2.212 6.04-5.425 6.04-.787 0-1.342-.23-1.833-.431-.496-.205-.924-.381-1.63-.381-.359 0-.812.164-1.292.338-.656.238-1.398.507-2.24.507h-.022zM13.534 0c.083 2.925-2.075 4.954-4.23 4.827C8.95 2.493 11.46 0 13.534 0z"
        />
      </G>
    </Svg>
  </SvgWrapper>
);

type AppleProps = {
  width?: number;
  height?: number;
  style?: any;
};
