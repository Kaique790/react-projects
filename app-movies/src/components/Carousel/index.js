import './carousel.css';
import Slider from 'react-slick'

function Carousel ({ children }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        centermode: false,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider { ...settings }>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;