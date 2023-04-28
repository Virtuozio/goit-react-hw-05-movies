import { getMovieCast } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchMovieCast = async id => {
      try {
        const movieCast = await getMovieCast(id);
        const sort = movieCast.map(({ character, name, id, profile_path }) => ({
          id,
          character,
          name,
          profile: profile_path,
        }));
        setCast(sort);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieCast(id);
  }, [id]);
  return (
    <section>
      <ul>
        {cast
          ? cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile
                      ? `https://image.tmdb.org/t/p/w200${actor.profile}`
                      : 'https://via.placeholder.com/100x150.png?text=No+Image'
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))
          : 'NO INFORMATION'}
      </ul>
    </section>
  );
};
export default Cast;
