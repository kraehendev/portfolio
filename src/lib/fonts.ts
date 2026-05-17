import { Montserrat } from 'next/font/google';

/** Latin subset, self-hosted by Next at build time (replaces `/public/Montserrat/`). */
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});
