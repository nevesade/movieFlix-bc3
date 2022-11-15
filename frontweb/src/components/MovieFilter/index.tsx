import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { requestBackend } from 'utils/requests';
import './styles.css';

export type MovieFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenre, SetSelectGenre] = useState<Genre[]>([]);

  const {  handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
    // console.log('Enviou', formData);
  };


  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj = {
      name: getValues('name'),
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
    // console.log("Enviou", obj)
  };

    const params: AxiosRequestConfig = {
    method: 'GET',
    url: '/genres',
    withCredentials: true,
  };
 
   useEffect(() => {
    requestBackend(params).then((response) => {
      SetSelectGenre(response.data);
      console.log(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
 

  return (
    <div className="  conatainer filter ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="filter-select">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenre}
                classNamePrefix="movie-filter-select"
                isClearable
                placeholder="Filtrar por Gênero"
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
                onChange={(value) => handleChangeGenre(value as Genre)}
              />
            )}
          />
    
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
