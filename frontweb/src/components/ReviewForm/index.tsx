import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Reviewform = () => {
  return (
    <div className=' review-card review-form-card '>
      <form>
        
        <div className=" mb-2 input-review">
          <input
            type="review"
            className="form-control base-input "
            placeholder="Deixe sua avaliação aqui"
            name="review"
          />
        </div>
        
        <div className="review-submit container">
         <ButtonIcon text=' SALVAR AVALIAÇÃO'/>
        </div>
        
      </form>
    </div>
  );
};

export default Reviewform;
