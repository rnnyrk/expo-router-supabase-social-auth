import { useRouter } from 'expo-router';

import { Container } from '@common/layout';
import { Text } from '@common/typography';

export default function Settings() {
  const router = useRouter();

  return (
    <Container>
      <Text
        align="center"
        color="gray800"
        size={48}
      >
        Settings
      </Text>
    </Container>
  );
}
