import { useLocation } from "react-router-dom"

const Reviews = () => {
    const location = useLocation()
    const info = location.state.reviews
    console.log(info);
    return(
        <div>
            {info ? (
                <ul>
                    {info.map((elem) => (
                        <li key={elem.id}>
                            <h4>Author: {elem.author}</h4>
                            <p>{elem.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    )
}

export default Reviews