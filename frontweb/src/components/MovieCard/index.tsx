
import { Movie } from 'types/movie';
import './styles.css';

type Props = {

  movie: Movie
}

const MovieCard = ({ movie } : Props) => {
 
  return (
    <div className=" movie-card container ">
      <div className="card-top  ">
        <img src={movie.imgUrl} alt="{movie.title}" />
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
