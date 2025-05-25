import { useLocation, Link, Outlet } from "react-router-dom";
import  BackLink  from "./BackLink";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
    const location = useLocation()
    const movie = location.state.movie
    const backLinkHref = "/movies";
    const [castDetails, setCastDetails] = useState([])
    const [reviewDetails, setReviewDetails] = useState([])
    const DOSTRUP = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM4NGU0YjI0MDRlZGU5YjYxMzVhZTBkMGZjZDExYiIsIm5iZiI6MTc0NjM1MzUzNy44MTUsInN1YiI6IjY4MTczZDgxMmIzODNhYTFjOTU3Yzg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lWiI1-TR0vvdobuSbjFmoeIDgx9Cp87XpaVn_FaF16M"

    useEffect(() => {
        const searchData = async () => {
          try {
            const castResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
              {
                headers: {
                  Authorization: `Bearer ${DOSTRUP}`,
                },
                params: {
                  language: 'en-US',
                },
              }
            );
            const reviewResponce = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.id}/reviews`,
                {
                  headers: {
                    Authorization: `Bearer ${DOSTRUP}`,
                  },
                  params: {
                    language: 'en-US',
                  },
                }
              );
            setReviewDetails(reviewResponce.data);
            setCastDetails(castResponse.data);
          } catch (error) {
            console.error("Ошибка при поиске:", error);
          }
        };
        searchData();
      }, [movie.id]);

    return (
        <main>
            <BackLink to={backLinkHref}>back</BackLink>
        <div>
          <h2>
            Product - {movie.title} 
          </h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          <p>
          {movie.overview}
          </p>
        </div>

        <ul>
            <li>
                <Link to="cast" state={{ movie: movie, cast: castDetails.cast }}>Cast</Link>
            </li>
            <li>
                <Link to="reviews" state={{ movie: movie, reviews: reviewDetails.results }}>Reviews</Link>
            </li>
        </ul>
    <Outlet />
      </main>
    )
}

export default MovieDetails