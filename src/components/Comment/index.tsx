import { commentType } from "../../constants";
import styles from "./Comment.module.scss";

function Comment({ props }: { props: commentType }) {
  const { name, email, body } = props;

  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.email}>{email}</div>
      </div>
      <div className={styles.description}>{body}</div>
    </div>
  );
}

export default Comment;
