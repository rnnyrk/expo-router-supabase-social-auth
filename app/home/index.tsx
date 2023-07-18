import { Container } from '@common/layout';
import { Text } from '@common/typography';

export default function HomeScreen() {
  return (
    <Container>
      <Text
        align="center"
        color="gray800"
        size={48}
      >
        Home
      </Text>
    </Container>
  );
}
