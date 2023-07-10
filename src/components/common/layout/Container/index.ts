import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;
