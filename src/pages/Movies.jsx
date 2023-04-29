import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from '../components/FilmList';
import { SearchBox } from '../components/SearchBox';
import { getMoviesByName } from '../MovieAPI';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';
  useEffect(() => {
    const fetchFilmsBySearch = async query => {
      try {
        const films = await getMoviesByName(query);
        const sort = films.map(({ title, id }) => ({
          id,
          title,
        }));
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

  const updateQueryString = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    e.target.reset();
    form.reset();
  };
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <main>
      <SearchBox
        value={query}
        onChange={handleChange}
        onSubmit={updateQueryString}
      />
      <FilmList films={visibleFilms} />
    </main>
  );
};
export default Movies;
