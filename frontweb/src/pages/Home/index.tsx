import {ReactComponent as MainImage} from 'assets/images/main-image.svg';
import './styles.css';

import Navbar from "components/Navbar";
import Login from './Login';

const Home = () => {
    return (
      <>
        <Navbar />
        <div className="home-container container">
          <div className="banner-card">
              <div className='banner-content-container'>
                  <h1>Avalie Filmes</h1>
                  <p>Diga o que você achou do seu filme favorito</p>
  
              </div>
              <div className='banner-image-container'>
                  <MainImage/>
              </div>
          </div>

          <div className='login-container'>
            <Login/>
          </div>
        </div>
      </>
    );
  };
  
  export default Home;