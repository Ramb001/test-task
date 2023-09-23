import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL, objType, commentType } from "../../constants";
import axios from "axios";
import styles from "./ItemPage.module.scss";
import Comment from "../../components/Comment";

function ItemPage() {
  const [data, setData] = useState<objType>();
  const [comments, setComments] = useState<Array<commentType>>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/${params.id}`).then((resp) => {
      if (resp.status === 200) {
        setData(resp.data);
      }
    });
    axios.get(`${URL}/${params.id}/comments`).then((resp) => {
      if (resp.status === 200) {
        setComments(resp.data);
      }
    });
  }, [setData, setComments]);

  return (
    <>
      <div className={styles.upperBox}>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/");
          }}
        >
          Назад
        </button>
        <h1 className={styles.upperTitle}>Post {data?.id}</h1>
      </div>
      <div className={styles.box}>
        <div className={styles.main}>
          <div className={styles.user}>User {data?.userId}</div>
          <div className={styles.info}>
            <div className={styles.title}>{data?.title}</div>
            <div className={styles.description}>{data?.body}</div>
          </div>
        </div>
        <div className={styles.title}>Комментарии:</div>
        <div className={styles.comments}>
          {comments.map((comment) => {
            return <Comment props={comment} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ItemPage;
