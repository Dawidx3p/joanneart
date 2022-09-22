import { useRouter } from "next/router";
import { data } from "../../utils/data";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { useEffect, useMemo, useState } from "react";
import Imgs from "../../components/Imgs";
import CommentSection from "../../components/CommentSection";
import { getLikes } from "../../utils/api";
import MobileImg from "../../components/MobileImg";
import Navigation from "../../components/Navigation";
import { Button } from "@mui/material";

function QuestionDetail() {
  const [userLikes, setLikes] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const article = useMemo(
    () => data.fotografia.find((obj) => obj.id === id),
    [id]
  );
  const refreshUserLikes = async () =>
    getLikes().then((likes) => {
      setLikes(likes);
    });
  useEffect(() => {
    getLikes().then((likes) => {
      setLikes(likes);
    });
  }, []);
  return (
    <>
      {article && article.title && article.description && (
        <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      <Navigation active={'fotografia'}/>
      <main className={styles.photoArticle}>
        {article && article.title && article.description && (
          <>
            <div className={styles.description}>
              <h1>{article.title[0]}</h1>
              <div>
                <h2>{article.title.slice(1)}</h2>
                <p>{article.description}</p>
              </div>
            </div>
            <section>
              {typeof article.img[0] === "object" &&
                article.imgSmall.map((arr, id) => (
                  <Imgs key={id} arr={arr} id={id} article={article} />
                ))}
            </section>
          </>
        )}
      </main>
      <CommentSection
        id={id}
        refreshUserLikes={refreshUserLikes}
        userLikes={userLikes}
      />
      {id && (
        <div className={styles.share}>
          <Button
          variant="contained"
            onClick={() =>
              navigator.share({
                url:
                `${router.pathname.substring(0, router.pathname.length - 4)}${id}`
              })
            }
          >
            Udostępnij
          </Button>
        </div>
      )}
    </>
  );
}
export default QuestionDetail;
