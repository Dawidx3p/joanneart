import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import ImageComments from '../../components/ImageComments';

function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  
  return (
    <>
    {id && <section className={styles.imageSection}>
        <button onClick={() => router.back()}>X</button>
        <img className={styles.image} src={id.slice(3).replaceAll('+', '/')} alt="main image" />
        <ImageComments id={id.slice(3).replaceAll('+', '/')}/>
    </section>}
    </>
  );
}
export default QuestionDetail;