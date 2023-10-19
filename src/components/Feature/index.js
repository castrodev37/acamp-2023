import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Investimento</h1>
      <p>O valor do primeiro lote é de R$ 200,00. Não fique de fora e aproveite!</p>
      <FeatureButton>Garanta sua vaga</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
