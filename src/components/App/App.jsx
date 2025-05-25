// src/components/App.jsx
import { useEffect, useState, Suspense, lazy } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import axios from "axios";
//car
const DOSTRUP = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM4NGU0YjI0MDRlZGU5YjYxMzVhZTBkMGZjZDExYiIsIm5iZiI6MTc0NjM1MzUzNy44MTUsInN1YiI6IjY4MTczZDgxMmIzODNhYTFjOTU3Yzg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lWiI1-TR0vvdobuSbjFmoeIDgx9Cp87XpaVn_FaF16M"
const KEY = "cf384e4b2404ede9b6135ae0d0fcd11b";

const Home = lazy(() => import('../Pages/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Reviews = lazy(() => import('../Pages/Reviews'));
const Cast = lazy(() => import('../Pages/Cast'));
const Movies = lazy(() => import('../Pages/Movies'));

export const App = () => {
  const [startList, setStartList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            headers: {
              Authorization: `Bearer ${DOSTRUP}`,
            },
          }
        );
        setStartList(response.data.results);
      } catch (error) {
        console.error("Ошибка при получении трендов:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const searchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            headers: {
              Authorization: `Bearer ${DOSTRUP}`,
            },
            params: {
              query: topic,
              language: 'en-US',
            },
          }
        );
        setSearchList(response.data.results);
      } catch (error) {
        console.error("Ошибка при поиске:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (topic.trim()) {
      searchData();
    } else {
      fetchData();
    }
  }, [topic]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Suspense fallback={<div>Loading components...</div>}>
        <Routes>
          <Route path="/movies" element={<Movies list={searchList} setQuery={setTopic} />} />
          <Route path="/" element={<Home list={startList} />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};