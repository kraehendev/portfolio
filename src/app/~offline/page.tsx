'use client';

import { useTranslations } from 'next-intl';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import Paragraph from '@/components/ui/paragraph';

export default function OfflinePage() {
  const t = useTranslations('pwa');

  return (
    <div>
      <Box>
        <Heading as="h2">{t('offlineTitle')}</Heading>
        <Paragraph>{t('offlineMessage')}</Paragraph>
        <div className="mt-2">
          <Button type="button" onclick={() => window.location.reload()}>
            {t('retry')}
          </Button>
        </div>
      </Box>
    </div>
  );
}
