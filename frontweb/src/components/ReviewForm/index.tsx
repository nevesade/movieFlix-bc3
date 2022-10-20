import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { error } from 'console';
import { useForm } from 'react-hook-form';
import { setConstantValue } from 'typescript';
import { requestBackend } from 'utils/requests';
import './styles.css';


type Props = {
  movieId: string;
}

type FormData = {
  movieId: number;
  text: string;
}
const Reviewform = ({ movieId } : Props) => {

  const { register, handleSubmit, formState: {errors},   setValue  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {

    formData.movieId = parseInt(movieId);
    console.log(formData)

    const params : AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
     
    };
  
    requestBackend(params)
    .then((response) => {
      setValue('text', '');
      console.log('SUCESSO AO SALVAR',response);
  
    })
    .catch(error => {
      console.log('ERRO AO SALVAR',error);
    });
  }

  


  return (
    <div className='  review-card review-form-card '>
        <form onSubmit={handleSubmit(onSubmit)}>

    
        
        <div className=" mb-2 input-review">
          <input
          {
            ...register('text', {
            required: 'Campo Obrigatório!',
          })}
            type="text"
            className="form-control base-input "
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
          <div>
            {errors.text?.message}
          </div>
        </div>
        
        <div className="review-submit  ">
         <ButtonIcon text=' SALVAR AVALIAÇÃO'/>
        </div>
        
      </form>
    </div>
  );
};

export default Reviewform;


