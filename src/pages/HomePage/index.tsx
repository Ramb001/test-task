import { useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import { URL, objType } from "../../constants";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "react-js-loader";
import styles from "./HomePage.module.scss";

function HomePage() {
  const [data, setData] = useState<Array<objType>>([]);
  const [fetch, setFetch] = useState(true);

  function loadMore() {
    axios
      .get(URL, {
        params: {
          _start: data.length,
          _limit: 25,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          if (resp.data.length !== 0) {
            let temp = [...data];
            resp.data.map((obj: objType) => {
              temp.push(obj);
            });
            setData(temp);
          } else {
            setFetch(false);
          }
        }
      });
  }

  return (
    <>
      <h1 className={styles.title}>Test task</h1>
      <div className={styles.visual} id="scrollableDiv">
        <InfiniteScroll
          className={styles.list}
          loadMore={loadMore}
          hasMore={fetch}
          loader={<Loader type="spinner-cub" bgColor={"gray"} size={40} />}
          useWindow={false}
          getScrollParent={() => document.getElementById("scrollableDiv")}
        >
          {data.map((obj, idx) => {
            return <Card props={obj} key={idx} />;
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default HomePage;
