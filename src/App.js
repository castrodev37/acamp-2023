import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, text, whoAmUs, amUs } from './components/Products/data';
import Feature from './components/Feature';
import Feature1 from './components/Feature1';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Sítio Shekinah - Maricá'
        data={productData}
        text={text}
      />
      <Feature />
      <Products heading='Um pouco mais do que vem por aí!' data={productDataTwo}>
      </Products>
      <h2 style={{
        textAlign: 'center',
        backgroundColor: '#150f0f',
        color: '#fff',
        fontSize: '2rem',
        paddingBottom: '4rem',
        marginTop: '-2rem'
      }}>...e muito mais!!</h2>
      <Feature1 />
      <Products heading='Quem somos'
        data={whoAmUs}
        text={amUs}
      />
      <Footer />
    </Router>
  );
}

export default App;
