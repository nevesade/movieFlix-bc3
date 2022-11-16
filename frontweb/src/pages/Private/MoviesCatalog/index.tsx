import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { Movie } from 'types/movie';
import { requestBackend } from 'utils/requests';
import './styles.css';
import { SpringPage } from 'types/vendor/spring';
import { Link } from 'react-router-dom';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(config)
      .then((response) => {
        setPage(response.data);
        console.log(page);
      })
      .finally(() => {
        console.log('Error');
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div className=" container my-4  ">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />

        <div className="row container ">
          {page?.content.map((movie) => (
            <div className="col-sm-6  col-lg-4 col-xl-3  " key={movie.id}>
              <Link className="link" to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>

        <div className="row">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;
