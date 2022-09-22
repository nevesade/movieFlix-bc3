import Navbar from 'components/Navbar';
import './styles.css';

const Movies = () => {
  return (
    <>
      <Navbar />
      <div className=" container my-4 movies-container">
        <div className="row movies-title-container">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="row ">
          <div className="movie-content">
            
              <a href="#">Acessar /movies/1</a>
          

           
              <a href="#">Acessar /movies/2</a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
