import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function MobileImg({arr, id, article}){
    return(
        <article className={styles.mobileImg}>
            {article && <>
                {arr.map((url, key) => <Link key={key} href={`/img/id:${url.replaceAll('/', '+')}`}><div className={id>0 ? styles.goup : ''}><Image width={200} height={200}  src={url} alt={`for the article ${article.title}`}/></div></Link>)}
            </>}
        </article>
    )
}