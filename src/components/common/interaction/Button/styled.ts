import styled, { css } from 'styled-components/native';

import { ButtonVariantsType, ButtonWrapperProps, IconType } from './types';

export const ButtonIcon = styled.View<IconType>`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  align-items: center;

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      margin: 0 0 0 8px;
    `}

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      margin: 0;
    `}
`;

export const ButtonContainer = styled.Pressable`
  height: 48px;
  width: 200px;
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  ${({ isPressed, theme }) =>
    isPressed &&
    css`
      background-color: ${theme.colors.primaryHover};
    `}

  ${({ variant, isPressed, theme }) =>
    variant === 'secondary' &&
    css`
      border: 4px solid ${theme.colors.primary};
      background-color: ${theme.colors.white};

      ${isPressed &&
      css`
        border: 4px solid ${theme.colors.primaryHover};
        background-color: ${theme.colors.gray};
      `}
    `}

  ${({ variant, isPressed, theme }) =>
    variant === 'social' &&
    css`
      align-items: center;
      border: 2px solid ${theme.colors.gray};
      background-color: ${theme.colors.white};

      ${isPressed &&
      css`
        border: 2px solid ${theme.colors.primaryHover};
        background-color: ${theme.colors.primaryHover};
      `}
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
      background-color: #999999;
    `}

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      width: 80px;
    `}
`;

export const ButtonLabel = styled.Text<ButtonVariantsType>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      color: ${theme.colors.primary};
    `}
`;
