import './styles.css';
import { ReactComponent as Stars } from 'assets/images/stars.svg';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'utils/requests';
import { useParams } from 'react-router-dom';

type UrlParams = {
  movieId: string;
};

const ReviewListing = () => {
  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
      console.log(response);
    });
  }, [movieId]);

  return (
    <>
      <div className="  review-card review-form-card ">
        <div className="  review-list ">
          {reviews?.map((review) => (
            <div className="mb-3">
              <h6>
                <span><Stars /></span>
                {review.user.name}
              </h6>

              <h5 className="review-text ">{review.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewListing;
