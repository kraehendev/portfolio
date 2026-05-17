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
      className={`relative isolate box-border flex w-full min-h-[calc(80svh-60px)] items-center justify-center overflow-x-clip overflow-y-hidden lg:min-h-[80vh] ${className}`}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[60rem] px-4 text-center sm:px-6">
        <div className="mx-auto w-fit max-w-full rounded-lg bg-black/80 px-5 py-4 md:bg-transparent lg:p-0 lg:rounded-none">
          <Heading as="h1" className="!mb-4 lg:!mb-8">
            {hero('name')} <br />
            {hero('role')}
          </Heading>
          <Heading as="h2" className="!mt-0 !mb-0 lg:!mt-4 lg:!mb-8">
            {common('welcome')}
          </Heading>
        </div>
      </div>
      <HeroDecor />
    </div>
  );
}
