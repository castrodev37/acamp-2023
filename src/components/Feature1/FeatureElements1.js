import styled from 'styled-components';
import FeaturePic1 from '../../images/feat.png';

export const FeatureContainer1 = styled.div`
  background: url(${FeaturePic1});
  height: 100vh;
  max-height: 500px;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
