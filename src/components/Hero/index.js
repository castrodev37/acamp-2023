import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,  
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      {/* <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Acampamento Impulso 2023</HeroH1>
          <HeroP>17 à 20 de novembro</HeroP>
          <HeroBtn href='https://wa.me/5521970114858?text=Eu%20quero%20me%20inscrever%20no%20acamp%202023!'
          >Inscreva-se!</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
