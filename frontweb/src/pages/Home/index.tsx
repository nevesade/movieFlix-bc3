import React, { useEffect } from 'react';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';
import Login from './Login';


const Home = () => {

  useEffect(() => {
    // Update the document title using the browser API
    
  });

  
  return (
    <>
      <div className="home-container container">
        <div className="banner-card">
          <div className="banner-content-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="banner-image-container">
            <MainImage />
          </div>
        </div>
         
        <div className="login-container">
          <Login/>
        </div>
      </div>
    </>
  );
};

export default Home;
