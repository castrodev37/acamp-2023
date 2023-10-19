import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, text } from './components/Products/data';
import Feature from './components/Feature';
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
      <Products heading='Um pouco mais do que vem por aí!' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
