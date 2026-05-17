import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import Paragraph from '@/components/ui/paragraph';
import { getTranslations } from 'next-intl/server';

const SERVER_LOG_ITEM_KEYS = [
  'browser',
  'os',
  'referrer',
  'host',
  'time',
] as const;

export default async function PrivacyPage() {
  const t = await getTranslations();
  const privacy = await getTranslations('privacy');

  return (
    <div className="py-8 lg:py-10">
      <Container>
        <Heading>{t('privacyPolicy')}</Heading>

        <Paragraph>{privacy('intro1')}</Paragraph>
        <Paragraph>{privacy('intro2')}</Paragraph>
        <Paragraph>{privacy('intro3')}</Paragraph>

        <Heading as="h2" className="mt-8">
          {privacy('serverLogFilesTitle')}
        </Heading>
        <Paragraph>{privacy('serverLogFilesIntro')}</Paragraph>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-foreground">
          {SERVER_LOG_ITEM_KEYS.map((key) => (
            <li key={key}>{privacy(`serverLogFilesItems.${key}`)}</li>
          ))}
        </ul>
        <Paragraph className="mt-4">{privacy('serverLogFilesOutro')}</Paragraph>

        <Paragraph className="mt-8">
          {privacy('source')}{' '}
          <a
            href="https://www.erecht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            erecht24.de
          </a>
        </Paragraph>
      </Container>
    </div>
  );
}
