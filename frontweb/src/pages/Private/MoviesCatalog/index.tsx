import { AxiosRequestConfig } from 'axios';
import Navbar from 'components/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';



const MovieCatalog= () => {
  
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params : AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(response)

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
            
              <Link className='link' to="/movies/1">Acessar /movies/1</Link>

              <Link className='link' to="/movies/2">Acessar /movies/2</Link>
          

           
              
          </div>
        </div>
      </div>


      <div>
      {page?.content.map((item) => (
        <p key={item.id}>{item.title} {item.title}</p>
       
      ))}
    </div>
    </>
  );
};

export default MovieCatalog;
