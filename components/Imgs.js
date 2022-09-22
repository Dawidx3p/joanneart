import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Image from 'next/image'

export default function Imgs({arr, id, article}){
    return(
        <article className={styles.imgs4}>
        {article && id%2===0 ? <>
            {arr.map((url, key) => <Link key={key} href={`/img/id:${url.replaceAll('/', '+')}`}><div className={id>0 ? styles.goup : ''}><Image width={200} height={200} src={url} alt={`for the article ${article.title}`}/></div></Link>)}
        </> : <section className={styles.imgs3}>
            {arr.map((url, key) => <Link key={key} href={`/img/id:${url.replaceAll('/', '+')}`}><div className={id>0 ? styles.goup : ''}><Image width={200} height={200} src={url} alt={`for the article ${article.title}`}/></div></Link>)}
        </section>}
        </article>
    )
}