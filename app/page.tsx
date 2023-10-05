import React from 'react';
import styles from './page.module.css'
import Header from '@root/components/Header';
import Logo from '@root/components/Logo';
import Link from '@root/components/Link';
import { getItem } from '@root/lib/get-data';
import { getLinks } from '@root/lib/get-links';

export default async function Home() {
  console.log('Rendering Home on server')

  // const { docs, learn } = getItem();
  const links = await getLinks();

  return (
    <main className={styles.main}>
      <div>
        <Header/>
        <Logo/>
      </div>

      <div className={styles.grid}>
        {links.map((_, i) => (
          <Link key={i} i={i} />
        ))}
      </div>
    </main>
  )
}
