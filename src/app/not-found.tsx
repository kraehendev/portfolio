import { getTranslations } from 'next-intl/server';
import Heading from '@/components/ui/heading';
import Box from '@/components/ui/box';
import IconLinkButton from '@/components/sections/iconLinkButton';
import Paragraph from '@/components/ui/paragraph';

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div>
      <Box>
        <Heading as="h2">{t('notFound.title')}</Heading>
        <Paragraph>{t('notFound.message')}</Paragraph>
        <div className="mt-2">
          <IconLinkButton href="/" label={t('notFound.returnHome')} />
        </div>
      </Box>
    </div>
  );
}
