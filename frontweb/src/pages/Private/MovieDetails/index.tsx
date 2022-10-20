import  { AxiosRequestConfig } from 'axios';

import Reviewform from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import {  requestBackend } from 'utils/requests';
import './styles.css';


type UrlParams = {

  movieId: string;
}


const MovieDetails = () => {

  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
   

    const params : AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
     
    };

    requestBackend(params)
    .then((response) => {
      
      setReviews(response.data);
      //console.log(response)

    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [ ...reviews];
    clone.push(review);
    setReviews(clone);

  }

  return (
    <>
      
      <div className=" container my-4 movies-container">
        <div className="row movie-details-title-container">
          <h1>Tela detalhes do filme id: {movieId} </h1>
          
        </div>
      
          <div className=" movie-details-content">
            
           { hasAnyRoles(['ROLE_MEMBER']) &&
             <Reviewform movieId= {movieId}  onInsertReview={handleInsertReview } />
           }
           

            
            <ReviewListing reviews = {reviews}  />
    
       
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
