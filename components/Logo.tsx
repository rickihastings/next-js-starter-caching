import Image from 'next/image';
import styles from '@root/app/page.module.css';
import React from 'react';
import { getItem } from '@root/lib/get-data';

export default function Logo() {
  console.log('Rendering Logo on server');

  const { next_logo } = getItem();

  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src={next_logo}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
