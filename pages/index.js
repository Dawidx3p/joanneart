import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.scss';
import Button from '@mui/material/Button';

export default function Home() {
  const [title, setTitle] = useState('Blog')
  const [description, setDescription] = useState(`Ponad 20 lat pracy dziennikarskiej spowodowało, iż pisanie stało się dla mnie prawdziwą pasją. Pisząc blog o wyzwaniach, inspiracjach i odkryciach - 
  będę mogła mieć kontakt z Czytelnikiem mojej strony, a przede wszystkim stworzę przestrzeń, która mam nadzieję będzie inspirować innych.`);
  const [img, setImg] = useState('/pngs/blog.png');
  const [button, setButton] = useState(undefined);
  return (
    <div>
      <Head>
        <title>Joanneart</title>
        <meta name="description" content="Cześć, jestem Joanna Dębiec, a to strona na której dziele się z wami swoją pasją" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homepage}>
        <Navigation active={'strona_glowna'}/>
        <img src="/logo.svg" alt="logo" id={styles.logo}/>
        <section className={styles.container}>
          <div className={styles.sidenav}>
            <img src="/blog.jpg" alt="sugeruje odnośnik do bloga" className={title==='Blog' ? styles.active : ''} onClick={() => {
              setTitle('Blog');
              setDescription(`Ponad 20 lat pracy dziennikarskiej spowodowało, iż pisanie stało się dla mnie prawdziwą pasją. 
              Pisząc blog o wyzwaniach, inspiracjach i odkryciach - będę mogła mieć kontakt z Czytelnikiem mojej strony, a 
              przede wszystkim stworzę przestrzeń, która mam nadzieję będzie inspirować innych.`);
              setImg('/pngs/blog.png')
              setButton(undefined);
            }}/>
            <img src="/malarstwo.jpg" alt="sugeruje odnośnik do malarstwa" id={styles.clickable} className={title==='Malarstwo' ? styles.active : ''} onClick={() => {
              setTitle('Malarstwo');
              setDescription(`To przestrzeń,którą mam w sobie od zawsze, ale od niedawna mogę ją ponownie w sobie odkrywać w wielu 
              odsłonach. Maluję murale ścienne, tak baśniowe,jak i stylowe,wedle indywidualnych projektów, obrazy na płótnie, 
              drewnie i kobiece Anioły z intencją. `);
              setImg('/pngs/malarstwo.png');
              setButton('/malarstwo')
            }}/>
            <div className={styles.container2}>
            <img src="/fotografia.jpg" alt="sugeruje odnośnik do fotografii" id={styles.clickable} className={title==='Fotografia' ? styles.activeGoup : styles.goup} onClick={() => {
              setTitle('Fotografia');
              setDescription(`Pasja fotografowania zrodziła się w pracy dziennikarskiej, świetnie czuję się zarówno w 
              fotoreportażu (kilka wystaw), jak i robiąc indywidualne czy rodzinne sesje zdjęciowe. Na co dzień lubię 
              zbliżać i fotografować otaczającą naturę.`);
              setImg('/pngs/fotografia.png');
              setButton('/fotografia');
            }}/>
            </div>
            <img src="/poezja.jpg" alt="sugeruje odnośnik do poezji" className={title==='Poezja' ? styles.activeGoup : styles.goup} onClick={() => {
              setTitle('Poezja');
              setDescription(`Słowem wyrażałam zawsze swoje myśli, układałam je,gdy nie mogłam ogarnąć. Poezja to istna zabawa 
              słowem, delektowanie się symboliką, bogactwem znaczeń, niedopowiedzeniami... przestrzenią pomiędzy wierszami. 
              Pokazuje piękno języka. Nieraz tylko poezja potrafi wyrazić to,czego nie sposób powiedzieć wprost, opisać, namalować czy sfotografować.`);
              setImg('/pngs/poezja.png');
              setButton(undefined);
            }}/>
              <img src="/moda.jpg" alt="sugeruje odnośnik do mody" className={title==='Moda' ? styles.activeGoup : styles.goup} onClick={() => {
              setTitle('Moda');
              setDescription(`To pomysł, który będę w najbliższym czasie realizować. Pokażę w nim swoje artystyczne  projekty ubrań, 
              inspirowanych kobiecością i naturą.`);
              setImg('/pngs/moda.png');
              setButton(undefined);
            }}/>
          </div>
          <div className={styles.description}>
            <h1>{title}</h1>
            <div className={styles.underline}></div>
            <p>{description}</p>
            {button && <Link href={button}><Button variant="contained">Zobacz</Button></Link>}
          </div>
        </section>
        <img src={img} alt="tło"  className={styles.background}/>
      </main>
      
    </div>
  )
}
