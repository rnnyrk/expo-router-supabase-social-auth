import Svg, { G, Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const Gsuite = ({ width, height, style }: GsuiteProps) => (
  <SvgWrapper
    style={style}
    $position="static"
  >
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
    >
      <G
        fill="none"
        fillRule="evenodd"
      >
        <Path
          fill="#4285F4"
          d="M21.168 11.045c0-.765-.069-1.502-.196-2.209H10.8v4.178h5.812a4.968 4.968 0 01-2.155 3.26v2.71h3.49c2.043-1.88 3.221-4.65 3.221-7.939z"
        />
        <Path
          fill="#34A853"
          d="M10.8 21.6c2.916 0 5.36-.967 7.148-2.617l-3.49-2.71c-.968.649-2.205 1.032-3.658 1.032-2.813 0-5.194-1.9-6.043-4.453H1.149v2.798A10.796 10.796 0 0010.8 21.6z"
        />
        <Path
          fill="#FBBC05"
          d="M4.757 12.852a6.492 6.492 0 01-.339-2.052c0-.712.123-1.404.339-2.052V5.95H1.149A10.796 10.796 0 000 10.8c0 1.743.417 3.392 1.149 4.85l3.608-2.798z"
        />
        <Path
          fill="#EA4335"
          d="M10.8 4.295c1.586 0 3.01.545 4.129 1.616l3.097-3.098C16.156 1.07 13.711 0 10.8 0 6.578 0 2.926 2.42 1.149 5.95l3.608 2.798c.85-2.553 3.23-4.453 6.043-4.453z"
        />
      </G>
    </Svg>
  </SvgWrapper>
);

type GsuiteProps = {
  width?: number;
  height?: number;
  style?: any;
};
