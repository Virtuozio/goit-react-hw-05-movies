import { getTrendingFilms } from 'MovieAPI';
import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { FilmList } from 'components/FilmList';
const Home = () => {
  // const location = useLocation();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await getTrendingFilms();
        const sort = trendingFilms.map(({ title, name, id }) => ({
          id,
          title: title || name,
        }));
        setFilms(sort);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <FilmList films={films} />
    </main>
  );
};
export default Home;
