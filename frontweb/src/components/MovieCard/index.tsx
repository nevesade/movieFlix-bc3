import { Movie } from 'types/movie';
import './styles.css';



const MovieCard = () => {


  const movie : Movie =  {

  id: 6,
  imgUrl: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
  subTitle: "Koe no Katachi",
  title: "A Voz do Silêncio",
  year: 2016,
 

    
  };
  return (
    <div className=" movie-card">
      <div className="card-top-container">
        <img src= {movie.imgUrl}  alt="{movie.title}" />
      </div>
      <div className="card-bottom-container">
        <h6>{movie.title}</h6>
        <span>{movie.year}</span>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
