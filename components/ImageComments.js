import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import {
  createLike,
  getCommentsBySession,
  getLikesById,
  likeImage,
  likeIt,
  addLikeToCache,
} from "../utils/api";
import CommentForm from "./CommentForm";

export default function ImageComments({
  id,
  userLikes,
  refreshUserLikes,
  id2,
}) {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState();
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getCommentsBySession(id).then((comments) => {
      console.log(comments);
      if (comments) {
        setComments(comments);
      }
    });
    getLikesById(id).then((likes) => {
      if (likes) {
        setLikes(likes);
      }
    });
  }, []);
  const refresh = () => {
    Promise.all([getCommentsBySession(id), getLikesById(id)]).then((values) => {
      console.log(values);
      setComments(values[0]);
      setLikes(values[1]);
    })
  };
  return (
    <div className={styles.ImageComments}>
      <section className={styles.likes}>
        <button
          className={styles.noStyle}
          onClick={() => {
            if (userLikes.includes(id)) {
              setMessage("Już zostało to polubione");
              return;
            }
            setMessage("");
            setDisabled(true);
            addLikeToCache([...userLikes, id]).then(refreshUserLikes());
            if (!likes) {
              return createLike(id).then((like) => {
                console.log(like);
                if (like) {
                  setLikes(like);
                }
              });
            } else {
              likeImage(likes).then(() =>
                refresh().then(() => setDisabled(false))
              );
            }
          }}
        >
          <img src="/svg/thumb_up.svg" alt="lubię to!" />
        </button>
        <span>{likes && likes.data && likes.data.likes}</span>
      </section>
      {comments.length
        ? comments.map((comment, id) => (
            <div key={id} className={styles.commentContainer}>
              <div className={styles.comment}>
                <span className={styles.author}>{comment.data.author}</span>
                {comment.data.text}
              </div>
              <div className={styles.commentLikes}>
                <button
                  disabled={disabled}
                  className={styles.likeit}
                  onClick={() => {
                    if (userLikes.includes(comment.ref["@ref"].id)) {
                      setMessage("Już zostało to polubione");
                      return;
                    }
                    setMessage("");
                    setDisabled(true);
                    addLikeToCache([...userLikes, comment.ref["@ref"].id]).then(
                      refreshUserLikes()
                    );
                    likeIt(comment).then(() =>
                      refresh().then(() => setDisabled(false))
                    );
                  }}
                >
                  Lubię to!
                </button>
                {comment.data.likes ? (
                  <div>
                    <img width={16} src="/svg/thumb_up.svg" alt="polubienia" />
                    <span>{comment.data.likes}</span>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        : null}
      {message}
      <CommentForm id={id} refresh={refresh} />
      {id && (
        <div className={styles.share}>
          <Button
          variant="contained"
            onClick={() =>
              navigator.share({
                url:
                  `${router.pathname.substring(0, router.pathname.length - 4)}${id2}`,
              })
            }
          >
            Udostępnij
          </Button>
        </div>
      )}
    </div>
  );
}
