import Image from 'next/image';
import styles from '../../styles/atoms/lantern.module.scss';

type LanternProps = {
  position?: 'left' | 'right';
  className?: string;
};

export default function Lantern({
  position = 'left',
  className = '',
}: LanternProps) {
  return (
    <div
      className={`${styles.lantern} ${styles[position]} ${className}`}
    >
      <Image
        src="/lantern.png"
        alt="Lantern"
        width={50}
        height={50}
        className={styles.image}
      />
    </div>
  );
}
