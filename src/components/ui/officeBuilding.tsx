import type { ReactNode } from 'react';
import styles from '@/styles/ui/officeBuilding.module.scss';

type OfficeBuildingProps = {
  children: ReactNode;
  className?: string;
};

/**
 * OfficeBuilding component
 *
 * A container component that creates an office building visual effect
 * using CSS ::before and ::after pseudo-elements.
 *
 * @param children - Content to render inside the building
 * @param className - Additional CSS classes to apply
 */
export default function OfficeBuilding({
  children,
  className = '',
}: OfficeBuildingProps) {
  return (
    <div className={`${styles.officeBuilding} ${className}`}>{children}</div>
  );
}
