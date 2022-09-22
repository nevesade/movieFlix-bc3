import Navbar from 'components/Navbar';
import Reviewform from 'components/ReviewForm';
import './styles.css';

const MovieDetails = () => {
  return (
    <>
      <Navbar />
      <div className=" container my-4 movies-container">
        <div className="row movie-details-title-container">
          <h1>Tela detalhes do filme id: 1 </h1>
        </div>
        <div className="row ">
          <div className=" movie-details-content">
            
            <Reviewform/>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
