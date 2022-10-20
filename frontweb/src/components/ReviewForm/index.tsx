import ButtonIcon from 'components/ButtonIcon';
import './styles.css';


type Props = {
  movieId: string
}
const Reviewform = ({ movieId } : Props) => {

  return (
    <div className='  review-card review-form-card '>
      <form>

    
        
        <div className=" mb-2 input-review">
          <input
            type="review"
            className="form-control base-input "
            placeholder="Deixe sua avaliação aqui"
            name="review"
          />
        </div>
        
        <div className="review-submit  ">
         <ButtonIcon text=' SALVAR AVALIAÇÃO'/>
        </div>
        
      </form>
    </div>
  );
};

export default Reviewform;
