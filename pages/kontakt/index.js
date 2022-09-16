import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Home.module.scss';

export default function Kontakt() {
  const [category, setCategory] = useState('Murale');
  return (
    <div className={styles.containerContact}>
      {/* <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
      <Navigation active={'kontakt'}/>
      <section className={styles.profile}>
        <img src="/profile.png" alt="Profile" />
        <p>Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i "magią rąk" sprawia, że świat nabiera barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.</p>
      </section>
      <section className={styles.social}>
        <h1>Social Media</h1>
        <div>
            <a href='https://www.facebook.com/search/top?q=joanneart'><img src="/svg/facebook.svg" alt="facebook" /></a>
            <a href='https://www.instagram.com/joannart_heart/'><img src="/svg/instagram.svg" alt="instagram" /></a>
        </div>
        <p>e-mail: <a href='mailto:daridebiec@gmail.com'>daridebiec@gmail.com</a></p>
      </section>
    </div>
  )
}
