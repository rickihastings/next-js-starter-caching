import { getLinks } from '@root/lib/get-links';
import styles from '../app/page.module.css'

export default async function Link({ i }: { i: number }) {
  // Obviously you wouldn't do this - but it demonstrates the capabilities
  const links = await getLinks();
  const link = links[i];

  if (!link) {
    return null;
  }

  return (
    <a
      href={link.link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {link.heading}
      </h2>
      <p>{link.content}</p>
    </a>
  );
}
