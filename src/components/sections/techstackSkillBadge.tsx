'use client';

import { useEffect, useState, type ComponentType } from 'react';
import Badge from '@/components/ui/badge';
import {
  loadTechstackLogo,
  type TechstackLogoKey,
} from '@/components/icons/logo/techstackLogoRegistry';
import type { SkillBadgeTheme } from '@/components/ui/badgeThemes';
import { useLazyInView } from '@/hooks/useLazyInView';
import type { IconProps } from '@/utils';

type TechstackSkillBadgeProps = {
  label: string;
  badgeTheme: SkillBadgeTheme;
  iconKey?: TechstackLogoKey;
};

export default function TechstackSkillBadge({
  label,
  badgeTheme,
  iconKey,
}: TechstackSkillBadgeProps) {
  const { ref, visible } = useLazyInView('160px');
  const [Icon, setIcon] = useState<ComponentType<IconProps> | null>(null);

  useEffect(() => {
    if (!visible || !iconKey) {
      return;
    }
    let cancelled = false;
    void loadTechstackLogo(iconKey).then((component) => {
      if (!cancelled) {
        setIcon(() => component);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [visible, iconKey]);

  return (
    <span ref={ref} className="inline-flex">
      <Badge theme={badgeTheme} icon={Icon ?? undefined}>
        {label}
      </Badge>
    </span>
  );
}
