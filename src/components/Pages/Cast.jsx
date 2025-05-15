import { useLocation } from "react-router-dom"

export const Cast = () => {
    const location = useLocation()
    const info = location.state.cast
    console.log(info);
    return (
        <ul>
            {info.map((elem) => {
               return (<li key={elem.id}>
                    <p>{elem.name}</p>
                    <img src={`https://image.tmdb.org/t/p/w200/${elem.profile_path}`} alt={elem.name} />
                    <p>{elem.character}</p>
                </li>)
            })}
        </ul>
    )
}