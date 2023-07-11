import { ButtonLoader } from './components';
import { ButtonContainer, ButtonIcon, ButtonLabel, ButtonWrapper } from './styled';
import { ButtonContentProps, ButtonProps } from './types';

const ButtonContent = ({
  children,
  icon,
  isLoading,
  iconOnly,
  iconPosition,
  variant,
}: ButtonContentProps) => (
  <>
    {isLoading ? (
      <ButtonLoader />
    ) : (
      <>
        {icon && (
          <ButtonIcon
            iconOnly={iconOnly}
            iconPosition={iconPosition}
          >
            {icon}
          </ButtonIcon>
        )}
        <ButtonLabel variant={variant}>{children}</ButtonLabel>
      </>
    )}
  </>
);

export const Button = ({
  children,
  icon,
  isLoading,
  isDisabled,
  iconPosition = 'left',
  onPress,
  variant,
  style,
}: ButtonProps) => {
  const styledButtonProps = {
    isDisabled,
    isLoading,
    iconOnly: !children && Boolean(icon),
    iconPosition,
    variant,
  };

  const buttonContentProps = {
    children,
    icon,
    isLoading,
    iconOnly: !children && Boolean(icon),
    iconPosition,
    variant,
  };

  return (
    <ButtonContainer
      onPress={onPress}
      style={style}
    >
      {({ pressed }) => {
        return (
          <ButtonWrapper
            {...styledButtonProps}
            isPressed={pressed}
          >
            <ButtonContent {...buttonContentProps} />
          </ButtonWrapper>
        );
      }}
    </ButtonContainer>
  );
};
