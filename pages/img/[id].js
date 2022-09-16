import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import ImageComments from '../../components/ImageComments';
import { useEffect, useState } from 'react';
import { getLikes } from '../../utils/api';

function QuestionDetail() {
  const [userLikes, setLikes] = useState([]);
  const router = useRouter();
  const { id } = router.query;
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
    {id && <section className={styles.imageSection}>
        <button className={styles.close} onClick={() => router.back()}>X</button>
        <img className={styles.image} src={id.slice(3).replaceAll('+', '/')} alt="main image" />
        <ImageComments refreshUserLikes={refreshUserLikes} userLikes={userLikes} id={id.slice(3).replaceAll('+', '/')}/>
    </section>}
    </>
  );
}
export default QuestionDetail;