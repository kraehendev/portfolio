import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import Paragraph from '@/components/ui/paragraph';
import Image from 'next/image';

export default async function AboutSection() {
  const t = await getTranslations('about');

  return (
    <section
      id="about"
      className="min-h-[40vh] scroll-mt-[72px] py-8 lg:scroll-mt-6"
    >
      <Container>
        <Heading as="h2">{t('title')}</Heading>
        <div className="mt-4 max-lg:flex max-lg:flex-col lg:flow-root">
          <figure className="m-0 shrink-0 max-lg:order-1 max-lg:mb-6 max-lg:self-center lg:float-left lg:mb-6 lg:mr-6 lg:w-[13.75rem] lg:[shape-outside:margin-box] xl:w-[18.75rem]">
            <Image
              alt={t('imageAlt')}
              src="/profile_pic.jpg"
              width={300}
              height={300}
              className="block h-auto w-full rounded-xl"
            />
          </figure>
          <div className="max-lg:order-2 lg:max-w-[81.25rem]">
            <Paragraph className="mt-0">{t('paragraph1')}</Paragraph>
            <Paragraph>{t('paragraph2')}</Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
}
