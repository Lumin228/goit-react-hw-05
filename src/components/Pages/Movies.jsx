import { Formik, Field, Form } from 'formik';
import { Link } from "react-router-dom";

const Movies = ({ list = [], setQuery }) => { // Значение по умолчанию для list
  return (
    <div>
      <h1>Search Film</h1>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.search.trim());
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              id="search"
              name="search"
              placeholder="Enter movie title"
              autoComplete="off"
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <ul>
        {list.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ movie }}>
              {/* Добавляем проверку на наличие названия */}
              <p>{movie.original_title || movie.title || 'No title'}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
