import { getTranslations } from 'next-intl/server';
import Heading from '@/components/ui/heading';
import HeroDecor from '@/components/sections/heroDecor';

type HeroSectionProps = {
  className?: string;
};

export default async function HeroSection({
  className = '',
}: HeroSectionProps) {
  const [hero, common] = await Promise.all([
    getTranslations('hero'),
    getTranslations(),
  ]);

  return (
    <div
      className={`relative box-border flex w-full min-h-[calc(80dvh-60px)] items-center justify-center overflow-hidden lg:min-h-[80vh] ${className}`}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[60rem] px-4 text-center sm:px-6">
        <Heading as="h1">
          {hero('name')} <br />
          {hero('role')}
        </Heading>
        <Heading as="h2" className="mt-4">
          {common('welcome')}
        </Heading>
      </div>
      <HeroDecor />
    </div>
  );
}
