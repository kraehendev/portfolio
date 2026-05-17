'use client';

import { useEffect, useState, type ComponentType } from 'react';
import Badge from '@/components/ui/badge';
import type { SkillBadgeTheme } from '@/components/ui/badgeThemes';
import {
  loadTechstackLogo,
  type TechstackLogoKey,
} from '@/components/icons/logo/techstackLogoRegistry';
import { useLazyInView } from '@/hooks/useLazyInView';
import type { IconProps } from '@/utils';

type TechstackSkillBadgeProps = {
  label: string;
  level: SkillBadgeTheme;
  iconKey?: TechstackLogoKey;
};

export default function TechstackSkillBadge({
  label,
  level,
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
      <Badge theme={level} icon={Icon ?? undefined}>
        {label}
      </Badge>
    </span>
  );
}
