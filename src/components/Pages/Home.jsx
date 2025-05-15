import { Link } from "react-router-dom"


export const Home = ({list}) => {
  
    return (
        <ul>
            {list.map(element => (
        <li key={element.id}>
          <Link to={`/movies/${element.id}`} state={{ movie: element }}>
            <p>{element.original_title}</p>
          </Link>
        </li>
      ))}
        </ul>
    )
}