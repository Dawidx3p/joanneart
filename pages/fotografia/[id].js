import { useRouter } from "next/router";
import { data, lastPosts } from "../../utils/data";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { useEffect, useMemo, useState } from "react";
import Imgs from "../../components/Imgs";
import CommentSection from "../../components/CommentSection";
import { getLikes } from "../../utils/api";
import MobileImg from "../../components/MobileImg";
import Navigation from "../../components/Navigation";
import { Button, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/MUI/AppBar";
import Masonry from "@mui/lab/Masonry";
import Link from "next/link";
import Gallery from "../../components/Gallery/Gallery";
import { Container } from "@mui/system";
import NewPostsRow from "../../components/MUI/NewPostsRow";

function QuestionDetail() {
  const [galleryOpener, setGalleryOpener] = useState(false);
  const [clicked, setClicked] = useState();
  const [userLikes, setLikes] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const article = useMemo(
    () => data.find((obj) => obj.id === id),
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
    <ResponsiveAppBar />
      {article && article.title && article.description && (
        <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      {galleryOpener ? <Gallery clicked={clicked} gallery={article.imgSmall} close={() => setGalleryOpener(false)}/> : null}
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
            <Masonry>
              {article.imgSmall.map((url, id) => <img onClick={() => {
                setClicked(url);
                setGalleryOpener(true);
              }} key={id} src={url} />)}
            </Masonry>
          </>
        )}
      </main>
      <Container>
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
      </Container>
      <Container>
        <Typography variant="h5" sx={{marginTop: '1rem'}} gutterBottom>Najnowsze posty</Typography>
        <NewPostsRow images={lastPosts}/>
      </Container>
    </>
  );
}
export default QuestionDetail;
