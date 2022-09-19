import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import CustomizedMenu from '../../components/CustomizedMenu';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Home.module.scss';
import { data } from '../../utils/data';

export default function Fotografia() {
  const [category, setCategory] = useState('Artystyczna');
  console.log(JSON.stringify(data.fotografia[0].img))
  return (
    <div className={styles.container}>
      <Head>
        <title>Fotografia Joanneart</title>
        <meta name="description" content="Strona na której dziele się z innymi swoją pasją" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.fotografia}>
        <Navigation active={'fotografia'}/>
        <div className={styles.description}>
          <h1>Fotografia</h1>
          <div className={styles.underline}></div>
          <p>Kategoria: {category}</p><CustomizedMenu options={['Artystyczna']} changeCategory={(category) => setCategory(category)} />
        </div>
        {data.fotografia.filter(obj => obj.type===category).map((article, id) => <article key={id} className={styles.article}>
          <h2>{article.title}</h2>
          <p>{article.date}</p>
          <p>{article.description}</p>
          <Button variant="contained"><Link href={article.url}>Zobacz</Link></Button>
        </article>)}
      </section>
    </div>
  )
}
