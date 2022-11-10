import Select from 'react-select';
import './styles.css';



const MovieFilter = () => {

      const options = [
    { value: 'Aventura', label: 'Aventura' },
    { value: 'Comedia', label: 'Comedia' },
    { value: 'Terror', label: 'Terror' }
  ]

    return(
        <div className="  conatainer filter ">
                <div className="filter-select">
               <Select
                options={options}
                classNamePrefix="movie-filter-select"
                isClearable
                placeholder="Aventura"
               />

              </div>
        </div>
    )


}

export default MovieFilter;

