import { getTrendingFilms } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await getTrendingFilms();
        console.log(trendingFilms);
        const sort = trendingFilms.map(({ title, name, id }) => ({
          id,
          title: title || name,
        }));
        console.log(sort);
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
      <ul>
        {films.map(el => (
          <li key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
