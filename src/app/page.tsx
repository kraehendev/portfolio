import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Paragraph from '@/components/ui/paragraph';
import { techstackData } from '@/data/techstack';
import TechstackSection from '@/components/sections/techstackSection';
import CareerSection from '@/components/sections/careerSection';
import BentoGrid from '@/components/ui/bentoGrid';
import BentoCard from '@/components/ui/bentoCard';
import styles from '@/styles/layout/header.module.scss';
import Cloud from '@/components/icons/cloud';
import Airplane from '@/components/icons/airplane';

export default async function HomePage() {
  const t = await getTranslations();
  const techstackItems = techstackData.flatMap((section) => section.items);
  return (
    <div>
      <section className="py-16 md:py-24">
        <Container classes={styles.heroContainer}>
          <div className={`${styles.heroContent} text-center`}>
            <Heading as="h1">
              Florian Kühne <br />
              Fullstack Developer
            </Heading>
            <Heading as="h2" className="mt-4">
              {t('welcome')} {t('Intro')}
            </Heading>
          </div>
          <div className={styles.cloud1}>
            <Cloud className={styles.cloudIcon} size={120} />
          </div>
          <div className={styles.cloud2}>
            <Cloud className={styles.cloudIcon} size={80} />
          </div>
          <div className={styles.cloud3}>
            <Cloud className={styles.cloudIcon} size={100} />
          </div>
          <div className={styles.cloud4}>
            <Cloud className={styles.cloudIcon} size={60} />
          </div>
          <div className={styles.airplaneTop}>
            <Airplane
              className={styles.airplaneIcon}
              size={96}
              accentColor="#ff1010"
            />
          </div>
          <div className={styles.airplaneMiddle}>
            <Airplane
              className={styles.airplaneIcon}
              size={96}
              accentColor="#00235e"
            />
          </div>
          <div className={styles.airplaneBottom}>
            <Airplane
              className={styles.airplaneIcon}
              size={72}
              accentColor="#ff5919"
            />
          </div>
        </Container>
      </section>
      <section className="py-8">
        <Container maxWidthClass="max-w-[1600px]">
          <BentoGrid>
            <BentoCard>
              <Heading as="h2">Über mich</Heading>
              <div className="mt-4">
                <Paragraph>
                  Seit 10 Jahren beschäftige ich mich überwiegend mit der
                  Webentwicklung und habe dabei mit verschiedenen Technologien
                  gearbeitet. Meine Anfänge habe ich mit der Frontendentwicklung
                  gemacht, mich in HTML, CSS und JavaScript eingearbeitet und
                  erste Schritte in Frameworks wie Bootstrap, jQuery und Vue
                  gemacht. Auch schon damals habe ich kleine Schritte in
                  Backend-Technologien gemacht, wie PHP, Python, Go und mit
                  Datenbanken wie MySQL gemacht. Über die Zeit und durch neue
                  Möglichkeiten der Webentwicklung habe ich mich zum Fullstack
                  Developer entwickelt und arbeite heute am liebsten mit
                  Next.js, React und TypeScript.
                </Paragraph>
                <Paragraph>
                  Abseits vom Programmieren, interessiere ich mich für die
                  Luftfahrt. Mein Lieblingsflugzeug ist der Airbus A350-1000, im
                  Flugsimulator fliege ich am liebsten den Airbus A320 NEO. Als
                  weiteres Hobby fotografiere und filme ich gerne mit meiner
                  Sony Alpha 7 IV.
                </Paragraph>
              </div>
            </BentoCard>
            <BentoCard>
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <Image
                  alt="Profilbild"
                  src={'/profile_pic.jpg'}
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </BentoCard>
          </BentoGrid>
        </Container>
      </section>
      <Container classes="py-8">
        <BentoGrid>
          <BentoCard colSpan={2} rowSpan={2}>
            <Heading as="h2">Mein Techstack</Heading>
            <Paragraph className="mt-2">
              Hier eine kleine Übersicht mit was ich bereits gearbeitet habe und
              wie ich meinen Skill darin selbst einschätze.
            </Paragraph>
            <div className="mt-6">
              <TechstackSection items={techstackItems} />
            </div>
          </BentoCard>
          <BentoCard colSpan={2}>
            <Heading as="h2">Mein Werdegang</Heading>
            <Paragraph className="mt-2">
              Meine berufliche Laufbahn von der Ausbildung bis heute.
            </Paragraph>
            <div className="mt-6">
              <CareerSection />
            </div>
          </BentoCard>
        </BentoGrid>
      </Container>
    </div>
  );
}
