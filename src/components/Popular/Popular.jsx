// Styled
import { PopularBox, ImgBox, ContentBox } from './PopularStyled';
// Libraries
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// JSON
import { popularData } from '../../data/PopularData';

export const Popular = () => {

    const slideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 }
        },
    };

    return(
        <PopularBox>
            <h1>Popular Destinations</h1>

            <Splide options={slideOptions}>
                {popularData.map((item, index) => (
                    <SplideSlide key={index}>
                        <ContentBox>
                            <ImgBox>
                                <img src={item.src} alt={`img/${item.city}`} />
                            </ImgBox>

                            <h2>{item.city}</h2>
                        </ContentBox>
                    </SplideSlide>
                ))}
            </Splide>
        </PopularBox>
    );
}