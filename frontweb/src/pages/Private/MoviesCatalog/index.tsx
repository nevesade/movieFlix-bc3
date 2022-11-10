import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'utils/requests';
import './styles.css';



const MovieCatalog= () => {
  


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

    requestBackend(params)
    .then((response) => {

     
      
        
        //console.log(response)
  
   
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
          

            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            
              {/* <Link className='link' to="/movies/1">Acessar /movies/1</Link>

              <Link className='link' to="/movies/2">Acessar /movies/2</Link>
           */}
          
        </div>
      </div>

    </>
  );
};

export default MovieCatalog;