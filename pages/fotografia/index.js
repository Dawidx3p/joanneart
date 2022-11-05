import Masonry from '@mui/lab/Masonry';
import { Button, Stack } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import MediaCard from '../../components/Card';
import CustomizedMenu from '../../components/CustomizedMenu';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Home.module.scss';
import { data } from '../../utils/data';

export default function Fotografia() {
  const [category, setCategory] = useState('Wszystkie');
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
          <p>Kategoria: {category}</p><CustomizedMenu options={['Wszystkie', 'Artystyczna', 'Sesje zdjęciowe']} changeCategory={(category) => setCategory(category)} />
        </div>
        <Masonry mt={2} columns={1} spacing={2} sx={{ marginTop:'1rem', width: '70vw' }}>
        {data.fotografia.filter(article => {
          if(category === 'Wszystkie'){
            return article
          }
          return article.type===category
        }).map((article, id) => <MediaCard 
        img={article.imgSmall[0][0]}
        key={id} 
        className={styles.article} 
        description={article.description}
        url={article.url}
        title={article.title} 
        date={article.date}/>)}
        </Masonry>
      </section>
    </div>
  )
}
