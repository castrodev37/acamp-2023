import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Segunda Igreja em Santa Izabel</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/segundaigrejaoficial' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/redeservolutionjovem/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink> */}
              {/* <SocialIconLink
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
