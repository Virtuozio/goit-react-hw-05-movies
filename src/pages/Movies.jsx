import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from '../components/FilmList';
import { SearchBox } from '../components/SearchBox';
import { getMoviesByName } from '../fakeAPI';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';
  useEffect(() => {
    const fetchFilmsBySearch = async query => {
      try {
        const films = await getMoviesByName(query);
        console.log(films);
        const sort = films.map(({ title, id }) => ({
          id,
          title,
        }));
        console.log(sort);
        setFilms(sort);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilmsBySearch(filmName);
  }, [filmName]);

  const visibleFilms = films.filter(film =>
    film.title.toLowerCase().includes(filmName.toLowerCase())
  );

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={filmName} onChange={updateQueryString} />
      <FilmList films={visibleFilms} />
    </main>
  );
};
export default Movies;
