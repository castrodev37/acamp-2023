import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Investimento</h1>
      <p>O valor dos 4 dias para o acampante é de apenas R$ 200,00 e o depósito pode ser feito através de Pix. Também pode ser feito com cartão de crédito em até 4x! Não fique de fora e aproveite!</p>
      <FeatureButton
        href='https://wa.me/5521970114858?text=Eu%20quero%20me%20inscrever%20no%20acamp%202023!'
      >Garanta sua vaga</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
