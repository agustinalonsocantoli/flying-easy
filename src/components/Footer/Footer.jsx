// React
import { Link } from "react-router-dom";
// Icons 
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";
// Styled
import { FooterBox, LinkBox, NameBox } from './FooterStyled';

export const Footer = () => {
    return(
        <FooterBox>
            <LinkBox>
                <Link to={'https://github.com/agustinalonsocantoli'} target='_blank'><BsGithub /></Link>
                <Link to={'https://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/'} target='_blank'><BsLinkedin /></Link>
                <Link to={'https://agustinalonsocantoli.github.io/im-agustin/'} target='_blank'><MdImportantDevices /></Link>
                <Link to={'https://www.instagram.com/alonsoagus_/'} target='_blank'><BsInstagram /></Link>
            </LinkBox>

            <NameBox>
                <h3>A website created by</h3>
                <h4>Agustin Alonso Cantoli</h4>
            </NameBox>

            <p>&copy;All Rights Reserved.</p>
        </FooterBox>
    )
}