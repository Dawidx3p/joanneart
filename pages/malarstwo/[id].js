import { useRouter } from 'next/router';
import { data } from '../../utils/data';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import { useEffect, useMemo, useState } from 'react';
import Imgs from '../../components/Imgs';
import CommentSection from '../../components/CommentSection';
import { getLikes } from '../../utils/api';

function QuestionDetail() {
  const [userLikes, setLikes] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const article = useMemo(() => data.malarstwo.find(obj => obj.id === id), [id]);
  const divider = (arr) => {
    let id = 0;
    let arrayOfImgs = [];
    let current = [...arr]
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
        id++;
    }
    console.log('data from divider:' ,JSON.stringify(arrayOfImgs));
    return arrayOfImgs
  }
  if(article && article.img){
    divider(article.img)
  }
  const refreshUserLikes = async () => getLikes().then(likes => {
    setLikes(likes);
  })
  useEffect(() => {
    getLikes().then(likes => {
      setLikes(likes)
    })
  }, [])
  return (
    <>
    {article && article.title && article.description && <Head>
      <title>{article.title}</title>
      <meta name="description" content={article.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>}
    <main className={styles.photoArticle}>
      {article && article.title && article.description && <>
      <div className={styles.description}>
          <h1>{article.title[0]}</h1>
          <div>
              <h2>{article.title.slice(1)}</h2>
              <p>{article.description}</p>
          </div>
      </div>
      <section>
          {typeof article.img[0] === 'object' && article.img.map((arr, id) => <Imgs key={id} arr={arr} id={id} article={article}/>)}
          {typeof article.img === 'string' && <img src={article.img} className={styles.titleImg} alt="title image" />}
      </section>
      </>}
    </main>
    <CommentSection id={id} refreshUserLikes={refreshUserLikes} userLikes={userLikes} />
    {id && <div className={styles.share}><button onClick={() => navigator.share({url: router.pathname.substring(0,router.pathname.length-4)+id})}>Udostępnij</button></div>}
    </>
    
  );
}
export default QuestionDetail;