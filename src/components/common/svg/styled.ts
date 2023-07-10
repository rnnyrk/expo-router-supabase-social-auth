import styled, { css } from 'styled-components/native';

export const SvgWrapper = styled.View<SvgWrapperProps>`
  align-items: center;
  justify-content: center;

  ${({ $position }) =>
    $position !== 'static' &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    `};
`;

type SvgWrapperProps = {
  $position?: 'absolute' | 'static';
};
