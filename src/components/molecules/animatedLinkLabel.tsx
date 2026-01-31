import Arrow from '../icons/arrow';
import Website from '../icons/website';
import World from '../icons/world';
import { classNameSummary } from "@/utils";
import styles from '../../styles/molecules/animatedLinkLabel.module.scss';


export default function AnimatedLinkLabel({ label, isExternal, inline = false }: { label: string, isExternal: boolean, inline?: boolean }) {
  return (
    <span className={classNameSummary([styles.labelContainer, inline ? styles.inline : undefined])}>
      <span className={styles.textBox}>
        <span className={styles.text}>
          {label}
        </span>
      </span>
      <span className={styles.iconBox}>
        <Arrow className={`${styles.icon} ${styles.arrowIcon}`} size={24} />
        {isExternal ? (
          <World className={`${styles.icon} ${styles.worldIcon}`} size={24} />
        ) : (
          <Website className={`${styles.icon} ${styles.websiteIcon}`} size={24} />
        )}
      </span>
    </span>
  );
}
