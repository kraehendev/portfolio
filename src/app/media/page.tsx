import Box from '@/components/ui/box';
import Container from '@/components/ui/container';
import Grid from '@/components/ui/grid';
import Heading from '@/components/ui/heading';
import { getTranslations } from 'next-intl/server';

export default async function MediaPage() {
  const t = await getTranslations();

  return (
    <main>
      <Container>
        <Heading>techstack</Heading>
        <Grid cols={{ base: 2 }} gap={4}>
          <Box>test</Box>
          <Box>test</Box>
        </Grid>
      </Container>
    </main>
  );
}
