import styled from 'styled-components/native';

export const LogoHeaderContainer = styled.View<LogoHeaderContainerProps>`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop + 'px'};
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

type LogoHeaderContainerProps = {
  paddingTop: number;
};
