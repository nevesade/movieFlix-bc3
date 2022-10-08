import { AxiosRequestConfig } from 'axios';
import Navbar from 'components/Navbar';
import { useState, useEffect } from 'react';
import { Movie } from 'types/movie';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

const MovieCatalog= () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);


  return (
    <>
      
      <div className=" container my-4 movies-container">
        <div className="row movies-title-container">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="row ">
          <div className="movie-content">
            
              <a href="#">Acessar /movies/1</a>
          

           
              <a href="#">Acessar /movies/2</a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;
