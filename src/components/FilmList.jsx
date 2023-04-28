import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`${el.id}`} state={{ from: location }}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
