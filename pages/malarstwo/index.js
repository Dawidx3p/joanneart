import { Button, Stack } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';
import MediaCard from '../../components/Card';
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
        <Masonry mt={2} columns={2} spacing={2} sx={{ marginTop:'1rem', width: '55vw' }}>
        {data.malarstwo.map((article, id) => <MediaCard 
        img={article.img}
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
