// React
import { Link } from "react-router-dom";
// Icons 
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
// Styled
import { FooterBox, LinkBox, NameBox, AdressBox } from './FooterStyled';

export const Footer = () => {
    return(
        <FooterBox>

            <LinkBox>
                <Link to={'https://github.com/agustinalonsocantoli'} target='_blank'>GitHub<BsGithub /></Link>
                <Link to={'https://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/'} target='_blank'>Linkedin<BsLinkedin /></Link>
                <Link to={'mailto:agustinalonsocantoli@gmail.com/'} target='_blank'>E-mail<MdOutlineMarkEmailUnread /></Link>
                <Link to={'https://agustinalonsocantoli.github.io/im-agustin/'} target='_blank'>Portafolio<MdImportantDevices /></Link>
                <Link to={'https://www.instagram.com/alonsoagus_/'} target='_blank'>Instagram<BsInstagram /></Link>
            </LinkBox>

            <AdressBox>
                <h3>Location</h3>
                <p>Valencia</p>
                <p>Calle Liria Nº 00</p>
                <p>46003, Valencia</p>
                <p>España</p>
            </AdressBox>

            <NameBox>
                <h3>A website created by</h3>
                <h4>Agustin Alonso Cantoli</h4>
                <p>&copy;All Rights Reserved.</p>
            </NameBox>
        </FooterBox>
    )
}