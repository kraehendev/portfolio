import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import { getTranslations } from 'next-intl/server';
import Paragraph from '@/components/ui/paragraph';
import AboutSection from '@/components/sections/aboutSection';
import { techstackData } from '@/data/techstack';
import TechstackSection from '@/components/sections/techstackSection';
import CareerSection from '@/components/sections/careerSection';
import HeroSection from '@/components/sections/heroSection';
import ContactSection from '@/components/sections/contactSection';
import PageEndFooter from '@/components/sections/pageEndFooter';

export default async function HomePage() {
  const [home, common] = await Promise.all([
    getTranslations('home'),
    getTranslations(),
  ]);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
      <section id="welcome" className="scroll-mt-[72px] lg:scroll-mt-6">
        <HeroSection />
      </section>
      <section id="techstack" className="min-h-[80vh] py-8">
        <Container>
          <Heading as="h2">{home('techstack.title')}</Heading>
          <Paragraph className="mt-2">{home('techstack.intro')}</Paragraph>
          <div className="mt-6">
            <TechstackSection categories={techstackData} />
          </div>
        </Container>
      </section>
      <AboutSection />
      <section id="career" className="min-h-[80vh] py-8">
        <Container>
          <Heading as="h2">{home('career.title')}</Heading>
          <Paragraph className="mt-2">{home('career.intro')}</Paragraph>
          <div className="mt-6">
            <CareerSection />
          </div>
        </Container>
      </section>
      <section
        id="contact"
        className="min-h-[40vh] scroll-mt-[72px] py-8 lg:scroll-mt-6"
      >
        <Container>
          <Heading as="h2">{common('navigation.contact')}</Heading>
          <Paragraph className="mt-4">{common('contactLead')}</Paragraph>
          <ContactSection />
        </Container>
      </section>
      </div>
      <PageEndFooter />
    </div>
  );
}
