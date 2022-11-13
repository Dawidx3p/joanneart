import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/MUI/AppBar';
import DemoPosts from '../components/MUI/DemoPosts';
import { Container } from '@mui/material';
import BasicCard from '../components/MUI/BasicCard';



export default function Home() {
  const images = [
    {
      url: 'murale',
      image: '/malarstwo/basniowy_mural.jpg',
      title: 'Murale',
      width: '34%',
    },
    {
      url: 'obrazy',
      image: '/malarstwo/baszta.jpg',
      title: 'Obrazy',
      width: '33%',
    },
    {
      url: 'anioly',
      image: '/malarstwo/aniol_milosci.jpg',
      title: 'Anioły',
      width: '33%',
    },
    {
      url: 'fotoreportaz',
      image: '/fotografia/styczniowe_inspiracje/19.jpg',
      title: 'Fotoreportaż',
      width: '34%',
    },
    {
      url: 'rodzinne_sesje',
      image: '/fotografia/sesja_rodzinna/02.jpg',
      title: 'Rodzinne sesje zdjęciowe',
      width: '33%',
    },
    {
      url: 'fotografia_natura',
      image: '/fotografia/styczniowe_inspiracje/19.jpg',
      title: 'Fotografia z natury',
      width: '33%',
    },
  ];
  return (
    <>
      <Head>
        <title>Joanneart</title>
        <meta name="description" content="Witaj na stronie Joanny Dębiec, to strona na której dziele się z wami swoją pasją" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background1}></div>
      <ResponsiveAppBar />
      <main className={styles.homepage}>
        <Container sx={{color: 'white'}}>
      <BasicCard text="Joanneart - to przestrzeń, w której dzielę się swoimi pasjami i inspiracjami -
          fotografią artystyczną, malarstwem, poezją, prozą, może nawet modą -
          tym wszystkim, czym odkrywam i wyrażam siebie."/>
      <DemoPosts images={images}/>
      </Container>

      </main>
      
      </>
  )
}
