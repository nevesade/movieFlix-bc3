import './styles.css';
import { ReactComponent as Stars } from 'assets/images/stars.svg';
import { Review } from 'types/review';



type Props = {

    reviews: Review[];
    
}

const ReviewListing = ( { reviews} : Props) => {


 //console.log(reviews)

  return (
    <>
      <div className="  review-card review-form-card ">
        <div className="  review-list ">

        <div className='mb-3'>
            { reviews?.map((review) => (
            <div className="mb-3">
              <h6 className="mb-1 ">
                <span>
                  <Stars /> {review.user.name}
                </span>
              </h6>

              <h5 className="review-text ">{review.text}</h5>
            </div>
          ))} 
        </div>
      </div>
      </div>
    </>
  );
};

export default ReviewListing;
