import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import Paragraph from '@/components/ui/paragraph';
import { contactLinks } from '@/data/contactLinks';
import { getTranslations } from 'next-intl/server';

export default async function LegalPage() {
  const t = await getTranslations();
  const legal = await getTranslations('legal');

  return (
    <div className="py-8 lg:py-10">
      <Container>
        <Heading>{t('legalNotice')}</Heading>

        <Heading as="h2" className="mt-8">
          {legal('tmgTitle')}
        </Heading>
        <Paragraph>{legal('name')}</Paragraph>

        <Heading as="h2" className="mt-8">
          {legal('contactTitle')}
        </Heading>
        <Paragraph>
          {legal('emailLabel')}{' '}
          <a href={`mailto:${contactLinks.email}`} className="underline">
            {contactLinks.email}
          </a>
        </Paragraph>

        <Heading as="h2" className="mt-8">
          {legal('copyrightTitle')}
        </Heading>
        <Paragraph>{legal('copyright1')}</Paragraph>
        <Paragraph>{legal('copyright2')}</Paragraph>

        <Paragraph className="mt-8">
          {legal('source')}{' '}
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
