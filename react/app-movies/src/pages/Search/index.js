import Header from '../../components/Header';  
import Footer from '../../components/Footer';
import Container from 'components/Container';
import styles from './Search.module.css';
import ScrollToTopButton from "../../components/ScrollToTopButton";
import videos from '../../json/videos.json';
import SearchVideoList from '../../components/SearchVideoList';

function Search() {
    return (
        <>
            <Header />
            <ScrollToTopButton />
            <Container>
                <section className={styles.search}>
                    <SearchVideoList videos={videos} />
                </section>  
            </Container>
            <Footer />
        </>
        
    );
}

export default Search;