import { useRouter } from 'expo-router';

import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout';
import { Text } from 'common/typography';

export default function Settings() {
  const router = useRouter();

  return (
    <Container>
      <Text
        align="center"
        color="darkGray"
        size={48}
      >
        Settings
      </Text>
    </Container>
  );
}
