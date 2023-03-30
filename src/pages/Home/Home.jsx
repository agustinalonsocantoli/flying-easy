// Components
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Popular } from '../../components/Popular/Popular';
import { Reviews } from '../../components/Reviews/Reviews';
// Image
import ImgBg from '../../assets/ImgBg.png'
// Icons
import { SlPlane } from 'react-icons/sl'
// Images
import beach from '../../assets/home/beach.jpg'
import mountain from '../../assets/home/montaña.jpg'
import snow from '../../assets/home/nieve.jpg'
import city from '../../assets/home/city.jpg'
// Styled
import { HomeBox, ImgBackground, Collage, Beach, Mountain, Snow, City } from './HomeStyled';

export const Home = () => {
    return(
        <HomeBox>
            <ImgBackground image={ImgBg}>
                <h1>Flights lower than ever</h1>
                <h2>Find Yours <SlPlane /></h2>
            </ImgBackground>

            <div style={{textAlign: 'center'}}>
                <SearchForm />
            </div>

            <Popular />

            <Reviews />

            <Collage>
                <Beach>
                    <h2>Beach</h2>
                    <img src={beach} alt="img/" />
                </Beach>

                <Mountain>
                    <img src={mountain} alt="img/" />
                    <h2>Mountain</h2>
                </Mountain>

                <City>
                    <h2>City</h2>
                    <img src={city} alt="img/" />
                </City>

                <Snow>
                    <img src={snow} alt="img/" />
                    <h2>Snow</h2>
                </Snow>
            </Collage>
        </HomeBox>
    )
}