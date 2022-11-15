import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { Movie } from 'types/movie';
import { requestBackend } from 'utils/requests';
import './styles.css';
import {SpringPage} from 'types/vendor/spring';
import { Link } from 'react-router-dom';

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();


  const getMovies = (pageNumber : number) =>{

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 4,
      },


    };

    
    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(page);
    }).finally(() => {
      console.log("Error");
    }

    )

  }

  useEffect(() => {
   getMovies(0)
  }, []);
/*
  

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 4,
      },
    };

    requestBackend(params)
    .then((response) => {

      setPage(response.data);

      console.log(response);
    });
  }, []);

  */

  return (
    <>
      <div className=" container my-4  ">
      
        <MovieFilter />
       

        <div className="row container ">
          {
            page?.content.map((movie) => (

              <div className='col-sm-6  col-lg-4 col-xl-3  ' key={movie.id}>
                <Link className='link' to="/movies/1">
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))

          }

         

          {/* <Link className='link' to="/movies/1">Acessar /movies/1</Link>

              <Link className='link' to="/movies/2">Acessar /movies/2</Link>
           */}
        </div>

        <div className="row">
        <Pagination 
            pageCount={(page) ? page.totalPages : 0}
            range= {3} 
            onChange={getMovies}
            />
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;

