import Head from 'next/head';
import { useState } from 'react';
import ResponsiveAppBar from '../../components/MUI/AppBar';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Home.module.scss';

export default function Kontakt() {
  const [category, setCategory] = useState('Murale');
  return (
    <>
    <ResponsiveAppBar />
    <div className={styles.containerContact}>
      <Head>
        <title>Joanneart Kontakt</title>
        <meta name="description" content="Strona na której dziele się z innymi swoją pasją" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.profile}>
        <img src="/profile.png" alt="Profile" />
        <p>Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i magią rąk sprawia, że świat nabiera barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.</p>
      </section>
      <section className={styles.social}>
        <h1>Social Media</h1>
        <div>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100063691398351'><img src="/svg/facebook.svg" alt="facebook" /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/joannart_heart/'><img src="/svg/instagram.svg" alt="instagram" /></a>
        </div>
        <p>e-mail: <a href='mailto:daridebiec@gmail.com'>daridebiec@gmail.com</a></p>
        <p>Tel. <a href='tel:+48784456794'>784456794</a></p>
      </section>
    </div>
    </>
  )
}
