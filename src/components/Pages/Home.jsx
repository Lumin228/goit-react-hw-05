import { Link } from "react-router-dom";

const Home = ({ list = [] }) => { // Добавляем значение по умолчанию
    return (
        <ul>
            {list.map(element => (
                <li key={element.id}>
                    <Link to={`/movies/${element.id}`} state={{ movie: element }}>
                        {/* Добавляем проверку на наличие свойства */}
                        <p>{element.original_title || element.title || 'No title'}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Home;
