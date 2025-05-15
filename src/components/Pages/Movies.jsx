import { Formik, Field, Form } from 'formik';
import { Link } from "react-router-dom"


export const Movies = ({list, set}) => {    
    return (
        <div>
    <h1>Search Film</h1>
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={(values) => {
        set(values.search)
      }}
    >
      <Form>
        <Field id="searche" name="search" placeholder="search" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <ul>
    {list.map(element => (
        <li key={element.id}>
          <Link to={`/movies/${element.id}`} state={{ movie: element }}>
            <p>{element.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
    )
}