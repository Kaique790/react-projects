import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import Loader from "../Loader";
import styles from "./SearchVideoList.module.css";

function filterVideos(videos, searchText) {
  return videos.filter((video) => {
    return (
      video.category.includes(searchText) || video.title.includes(searchText)
    );
  });
}

function SearchVideoList({ videos }) {
  const [searchText, setsearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Busque um video..."
        value={searchText}
        onChange={(event) => setsearchText(event.target.value)}
      />

      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem videossobre "${searchText}"`}
        />
      )}
    </section>
  );
}

export default SearchVideoList;
