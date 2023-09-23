import { useNavigate } from "react-router-dom";
import { objType } from "../../constants";
import styles from "./Card.module.scss";

function Card({ props }: { props: objType }) {
  const { userId, id, title, body } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div>
        {userId}.{id}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{body}</div>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          navigate(`/${userId}/${id}`);
        }}
      >
        Просмотр
      </button>
    </div>
  );
}

export default Card;
