import Box from '@/components/atoms/box';
import Container from '@/components/atoms/container';
import Grid from '@/components/molecules/grid';
import Heading from '@/components/atoms/heading';
import IconLinkButton from '@/components/organisms/iconLinkButton';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import PageItem from '@/components/organisms/pageItem';
import Header from '@/components/organisms/header';
import Paragraph from '@/components/atoms/paragraph';
import { techstackData } from '@/data/techstack';
import TechstackSection from '@/components/organisms/techstackSection';
import OfficeBuilding from '@/components/molecules/officeBuilding';
import CareerSection from '@/components/organisms/careerSection';

export default async function HomePage() {
  const t = await getTranslations();
  const techstackItems = techstackData.flatMap((section) => section.items);
  return (
    <div>
      <Header className="pt-16">
        <Heading as="h1">
          Florian Kuehne <br />
          Fullstack Developer
        </Heading>
        <Heading as="h2">
          {t('welcome')} {t('Intro')}
        </Heading>
      </Header>
      <main>
        <Container classes="pb-0">
          <OfficeBuilding>
            {/*  <PageItem>
            <Container narrow>
              <div className="mb-8">
                <p className="mb-4 text-lg">
                  Willkommen auf meiner Webseite! Hier findest du mehr
                  Information über mich, mit welchem Techstack ich arbeite und
                  was ich abseits vom Programmieren tue.
                </p>
              </div>
            </Container>
          </PageItem> */}
            <PageItem>
              <Heading as="h2">Über mich</Heading>
              <Grid cols={{ base: 1, md: 2 }} gap={6}>
                <Box>
                  <Paragraph className="text-white">
                    Seit 10 Jahren beschäftige ich mich überwiegend mit der
                    Webentwicklung und habe dabei mit verschiedenen Technologien
                    gearbeitet. Meine Anfänge habe ich mit der
                    Frontendentwicklung gemacht, mich in HTML, CSS und
                    JavaScript eingearbeitet und erste Schritte in Frameworks
                    wie Bootstrap, jQuery und Vue gemacht. Auch schon damals
                    habe ich kleine Schritte in Backend-Technologien gemacht,
                    wie PHP, Python, Go und mit Datenbanken wie MySQL gemacht.
                    Über die Zeit und durch neue Möglichkeiten der
                    Webentwicklung habe ich mich zum Fullstack Developer
                    entwickelt und arbeite heute am liebsten mit Next.js, React
                    und TypeScript.
                  </Paragraph>
                  <Paragraph className="text-white">
                    Abseits vom Programmieren, interessiere ich mich für die
                    Luftfahrt. Mein Lieblingsflugzeug ist der Airbus A350-1000,
                    im Flugsimulator fliege ich am liebsten den Airbus A320 NEO.
                    Als weiteres Hobby fotografiere und filme ich gerne mit
                    meiner Sony Alpha 7 IV.
                  </Paragraph>
                </Box>
                <div className="relative flex items-center justify-center">
                  <Image
                    alt="Profilbild"
                    src={'/profile_pic.jpg'}
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </Grid>
            </PageItem>
            <PageItem>
              <Heading as="h2">Mein Techstack</Heading>
              <Paragraph>
                Hier eine kleine Übersicht mit was ich bereits gearbeitet habe
                und wie ich meinen Skill darin selbst einschätze.
              </Paragraph>
              <Box>
                <TechstackSection items={techstackItems} />
              </Box>
            </PageItem>
            <PageItem>
              <Heading as="h2">Mein Werdegang</Heading>
              <Paragraph>
                Meine berufliche Laufbahn von der Ausbildung bis heute.
              </Paragraph>
              <CareerSection />
            </PageItem>
          </OfficeBuilding>
        </Container>
      </main>
    </div>
  );
}
