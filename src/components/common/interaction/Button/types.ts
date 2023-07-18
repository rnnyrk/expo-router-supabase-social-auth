import { PressableProps } from 'react-native';

export type ButtonType = {
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export type IconType = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
};

export type ButtonVariantsType = {
  variant?: 'primary' | 'secondary' | 'social';
};

export type ButtonProps = Omit<PressableProps, 'onPress' | 'style'> &
  ButtonType &
  ButtonVariantsType &
  IconType & {
    isPressed?: boolean;
    onPress: () => void;
    style?: any;
  };

export type ButtonWrapperProps = ButtonVariantsType &
  Pick<ButtonProps, 'isPressed'> &
  Pick<ButtonType, 'isDisabled'> &
  Pick<IconType, 'iconPosition' | 'iconOnly'>;

export type ButtonContentProps = ButtonVariantsType &
  Pick<ButtonType, 'children' | 'isLoading'> &
  Pick<IconType, 'icon' | 'iconPosition' | 'iconOnly'>;
