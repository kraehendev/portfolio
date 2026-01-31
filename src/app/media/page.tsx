import Box from '@/components/atoms/box';
import Container from '@/components/atoms/container';
import Grid from '@/components/molecules/grid';
import Heading from '@/components/atoms/heading';
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
