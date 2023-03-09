// Components
import { SearchForm } from '../../components/SearchForm/SearchForm';
// Image
import ImgBg from '../../assets/ImgBg.png'
// Icons
import { SlPlane } from 'react-icons/sl'
// Styled
import { HomeBox, ImgBackground } from './HomeStyled';

export const Home = () => {
    return(
        <HomeBox>
            <ImgBackground image={ImgBg}>
                <h1>Flights lower than ever</h1>
                <h2>Find Yours <SlPlane /></h2>
            </ImgBackground>

            <SearchForm />
        </HomeBox>
    )
}