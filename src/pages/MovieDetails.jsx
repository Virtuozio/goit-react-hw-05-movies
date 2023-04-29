import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { getMoviesById } from '../MovieAPI';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchTrendingFilms = async id => {
      try {
        const film = await getMoviesById(id);
        const sort = {
          title: film.title,
          poster: film.poster_path,
          year: film.release_date.slice(0, 4),
          overview: film.overview,
          genres: film.genres.map(genre => genre.name).join(', '),
          userscore: Math.round(film.vote_average * 10),
        };
        setFilm(sort);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendingFilms(id);
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img
        src={
          film.poster
            ? `https://image.tmdb.org/t/p/w500${film.poster}`
            : 'https://via.placeholder.com/100x150.png?text=No+Image'
        }
        alt={film.title}
        width="300"
        style={{ display: 'flex' }}
      />
      <div>
        <h2>
          {film.title ? film.title : '???'} ({film.year ? film.year : '???'})
        </h2>
        <p>Userscore: {film.userscore ? `${film.userscore}%` : 'Not scored'}</p>

        <h3>Overview</h3>
        <p>{film.overview ? film.overview : 'No describe'}</p>
        <h4>Genres</h4>
        <p>{film.genres ? film.genres : 'No genres'}</p>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
