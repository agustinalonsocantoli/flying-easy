// Components
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Popular } from '../../components/Popular/Popular';
// Image
import ImgBg from '../../assets/ImgBg.png'
// Icons
import { SlPlane } from 'react-icons/sl'
// Styled
import { HomeBox, ImgBackground } from './HomeStyled';
import { Reviews } from '../../components/Reviews/Reviews';

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
        </HomeBox>
    )
}