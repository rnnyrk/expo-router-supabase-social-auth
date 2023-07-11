import { Animated, Easing } from 'react-native';

import { DotContainer } from './styled';

export const Dot: React.FC<DotProps> = ({ delay }) => {
  const opacityValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(opacityValue, {
      toValue: 100,
      duration: 1400,
      delay: delay,
      easing: Easing.ease,
      useNativeDriver: true,
    }),
  ).start();

  const opacity = opacityValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0.0, 1.0, 0.0],
  });

  return <DotContainer style={{ opacity }} />;
};

type DotProps = {
  delay: number;
};
