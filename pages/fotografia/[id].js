import { useRouter } from 'next/router';
import { data } from '../../utils/data';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import { useEffect, useMemo, useState } from 'react';
import Imgs from '../../components/imgs';

function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const article = useMemo(() => data.fotografia.find(obj => obj.id === id), [id]);
  const divider = (arr) => {
    let arrayOfImgs = [];
    let current = arr
    let num = 4;
    while( current.length > 0 ){
        arrayOfImgs.push(current.slice(0, num));
        if(num===4){
            current.shift();
            current.shift();
            current.shift();
            current.shift();
            num = 3;
        }else if(num===3){
            current.shift();
            current.shift();
            current.shift();
            num = 4;
        }else{
            current.shift();
            current.shift();
            current.shift();
            num = num;
        }
    }
    console.log(arrayOfImgs)
    return arrayOfImgs
  }
  const arr = useMemo(() => {
    if(article){
        return divider(article.img)
    }else{
        return []
    }
  }, [article])
  useEffect(() => {
    console.log(arr)
  }, [arr])
  return (
    <main className={styles.photoArticle}>
        
            {article && article.title && article.description && article.img && <>
            <div className={styles.description}>
                <h1>{article.title[0]}</h1>
                <div>
                    <h2>{article.title.slice(1)}</h2>
                    <p>{article.description}</p>
                </div>
            </div>
            <section>
                {arr.map((arr, id) => <Imgs key={id} arr={arr} id={id} article={article}/>)}
            </section>
            </>}
            
        
        <section className={styles.imgcontainer}>
        
        </section>
    </main>
  );
}
export default QuestionDetail;