import { getMovieReviews } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const movieReviews = await getMovieReviews(id);
        console.log(movieReviews);
        const sort = movieReviews.map(({ author, content, id }) => ({
          id,
          author,
          content,
        }));
        setReviews(sort);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieReviews(id);
  }, [id]);
  return (
    <section>
      {reviews
        ? reviews.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>

              <p>{review.content}</p>
            </li>
          ))
        : 'NO INFORMATION'}
    </section>
  );
};
export default Reviews;
