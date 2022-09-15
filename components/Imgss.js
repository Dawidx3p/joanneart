import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Imgs({arr, id, article}){
    return(
        <article className={styles.imgs4}>
        {article && id%2===0 ? <>
            {arr.map((url, key) => <Link key={key} href={`/img/id:${url.replaceAll('/', '+')}`}><img src={url} alt={`for the article ${article.title}`} className={id>0 ? styles.goup : ''}/></Link>)}
        </> : <section className={styles.imgs3}>
            {arr.map((url, key) => <Link key={key} href={`/img/id:${url.replaceAll('/', '+')}`}><img src={url} alt={`for the article ${article.title}`} className={id>0 ? styles.goup : ''}/></Link>)}
        </section>}
        </article>
    )
}