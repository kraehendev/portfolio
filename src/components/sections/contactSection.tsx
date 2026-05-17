import { getTranslations } from 'next-intl/server';
import LinkBadge from '@/components/ui/linkBadge';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Mail from '@/components/icons/mail';
import { contactLinks } from '@/data/contactLinks';

export default async function ContactSection() {
  const t = await getTranslations('contact');

  return (
    <ul className="mt-6 flex flex-wrap gap-4">
      <li>
        <LinkBadge
          href={contactLinks.linkedin}
          icon={Linkedin}
          ariaLabel={t('linkedinAria')}
        >
          {t('linkedin')}
        </LinkBadge>
      </li>
      <li>
        <LinkBadge
          href={contactLinks.github}
          icon={Github}
          ariaLabel={t('githubAria')}
        >
          {t('github')}
        </LinkBadge>
      </li>
      <li>
        <LinkBadge
          href={`mailto:${contactLinks.email}`}
          icon={Mail}
        >
          {contactLinks.email}
        </LinkBadge>
      </li>
    </ul>
  );
}
