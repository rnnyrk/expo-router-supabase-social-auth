import { Dot } from '../Dot';
import { ButtonLoaderContainer } from './styled';

export const ButtonLoader: React.FC = () => {
  return (
    <ButtonLoaderContainer>
      <Dot delay={0} />
      <Dot delay={220} />
      <Dot delay={440} />
    </ButtonLoaderContainer>
  );
};
