export type IconProps = {
  className?: string;
  size?: number;
};

export function isExternalLink(href?: string): boolean {
  return href ? /^(https?:\/\/|mailto:|tel:)/i.test(href) : false;
}

export function classNameSummary(classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
