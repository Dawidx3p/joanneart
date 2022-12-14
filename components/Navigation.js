import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { Link as LinkView } from '@mui/material';

export default function Navigation({active}){
    const [burgerOpen, setOpener] = useState(false);
    return(
        <>
            <section className={styles.navigation}>
                <ul>
                    <li className={active==='strona_glowna' ? styles.active : ''}><Link href='/'><LinkView underline="hover">Strona główna</LinkView></Link></li>
                    <li className={active==='fotografia' ? styles.active : ''}><Link href='/fotografia'><LinkView underline="hover">Fotografia</LinkView></Link></li>
                    <li className={active==='malarstwo' ? styles.active : ''}><Link href='/malarstwo'><LinkView underline="hover">Malarstwo</LinkView></Link></li>
                    <li className={active==='kontakt' ? styles.active : ''}><Link href='/kontakt'><LinkView underline="hover">Kontakt</LinkView></Link></li>
                </ul>
            </section>
            <section className={styles.navigation2}>
                <div className={styles.burger} onClick={() => setOpener(prev => !prev)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={burgerOpen ? styles.burgerMenu : styles.burgerMenuClosed}>
                    <li className={active==='strona_glowna' ? styles.active : ''}><Link href='/'>Strona główna</Link></li>
                    <li className={active==='fotografia' ? styles.active : ''}><Link href='/fotografia'>Fotografia</Link></li>
                    <li className={active==='malarstwo' ? styles.active : ''}><Link href='/malarstwo'>Malarstwo</Link></li>
                    <li className={active==='kontakt' ? styles.active : ''}><Link href='/kontakt'>Kontakt</Link></li>
                    <li className={active==='' ? '' : ''}><span onClick={() => setOpener(prev => !prev)}>X</span></li>
                </ul>
            </section>
        </>
        
    )
}