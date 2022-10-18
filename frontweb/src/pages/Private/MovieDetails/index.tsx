import axios, { AxiosRequestConfig } from 'axios';
import Navbar from 'components/Navbar';
import Reviewform from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL, requestBackend } from 'utils/requests';
import './styles.css';


type UrlParams = {

  movieId: string;
}


const MovieDetails = () => {

  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
   

    const params : AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
     
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
      console.log(response)

    });
  }, [movieId]);

  return (
    <>
      
      <div className=" container my-4 movies-container">
        <div className="row movie-details-title-container">
          <h1>Tela detalhes do filme id:{movie?.id} </h1>
          
        </div>
      
          <div className=" movie-details-content">
            
            <Reviewform/>
           
     
        
          
            
            <ReviewListing/>
    
       
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
