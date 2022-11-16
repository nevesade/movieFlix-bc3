import { AxiosRequestConfig } from 'axios';

import Reviewform from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';

import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
      console.log('AVALIAÇÕES: ', response);
    });

    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      //console.log(response)
      requestBackend(config).then((response) => {
        setMovie(response.data);

        console.log('MEU UNICO FILME ', response);
        console.log('Movie detalhes', movie);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <div className=" container my-5 movies-container">
        
         

          <div className="row details-card ">
            <div className="col-xl-6 ">
              <div className="img-container">
                <img className='mx-auto d-block' src={movie?.imgUrl} alt={movie?.title} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card-bottom-container">
                <h6>{movie?.title}</h6>
                <span>{movie?.year}</span>
                <p>{movie?.subTitle}</p>

                
                  <div className="  review-list ">
                    <div className="mb-3">
                     
                         

                          <h5 className="review-text ">{movie?.synopsis}</h5>
                        
                      
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
       

        <div className=" movie-details-content my-5">
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <Reviewform movieId={movieId} onInsertReview={handleInsertReview} />
          )}

          <ReviewListing reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
