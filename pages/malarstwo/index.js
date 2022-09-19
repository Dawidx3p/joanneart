import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import CustomizedMenu from '../../components/CustomizedMenu';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Home.module.scss';
import { data } from '../../utils/data';

export default function Fotografia() {
  const [category, setCategory] = useState('Murale');
  console.log(JSON.stringify(data.fotografia[0].img))
  return (
    <div className={styles.container}>
      <Head>
        <title>Malarstwo Joanneart</title>
        <meta name="description" content="Strona na której dziele się z innymi swoją pasją" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation active={'malarstwo'}/>
      <section className={styles.fotografia}>
        <div className={styles.description}>
          <h1>Malarstwo</h1>
          <div className={styles.underline}></div>
          <p>kategoria: {category}</p>
          <CustomizedMenu options={['Murale']} changeCategory={(category) => setCategory(category)} />
        </div>
        {data.malarstwo.map((article, id) => <article key={id} className={styles.article}>
          <h2>{article.title}</h2>
          <p>{article.date}</p>
          <p>{article.description}</p>
          <Button variant="contained"><Link href={article.url}>Zobacz</Link></Button>
        </article>)}
      </section>
    </div>
  )
}
