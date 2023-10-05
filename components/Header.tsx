import Image from 'next/image';
import styles from '@root/app/page.module.css';
import { getItem } from '@root/lib/get-data';

export default function Header() {
  console.log('Rendering Header on server');

  const { desc, link } = getItem();

  return (
    <div className={styles.description}>
      <p>
        {desc}
      </p>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
