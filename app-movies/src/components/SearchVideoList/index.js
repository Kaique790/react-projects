import { useState } from 'react';
import VideoList from '../VideoList';
import styles from './SearchVideoList.module.css';

function filterVideos(videos, searchText) {
    return videos.filter(video => {
        return video.category.includes(searchText) || video.title.includes(searchText)
    });
}

function SearchVideoList({ videos }) {
    const [ searchText, setsearchText ] = useState("");
    const foundVideos = filterVideos(videos, searchText);

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder='Busque um video...'
                value={searchText}
                onChange={event => setsearchText(event.target.value)}
            />

            <VideoList
                videos={foundVideos}
                emptyHeading={`Sem videossobre "${searchText}"`}
            />
        </section>
    );
}


export default SearchVideoList;