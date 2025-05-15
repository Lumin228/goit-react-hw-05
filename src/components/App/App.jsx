// src/components/App.jsx
import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Movies } from "../Pages/Movies";
import { Home } from "../Pages/Home";
import axios from "axios";
import css from '../App/App.module.css'
import { MovieDetails } from "../Pages/MovieDetails";
import { Reviews } from "../Pages/Reviews";
import { Cast } from "../Pages/Cast";

const DOSTRUP = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM4NGU0YjI0MDRlZGU5YjYxMzVhZTBkMGZjZDExYiIsIm5iZiI6MTc0NjM1MzUzNy44MTUsInN1YiI6IjY4MTczZDgxMmIzODNhYTFjOTU3Yzg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lWiI1-TR0vvdobuSbjFmoeIDgx9Cp87XpaVn_FaF16M"
const KEY = "cf384e4b2404ede9b6135ae0d0fcd11b";

export const App = () => {
  const [startList, setStartList] = useState([]);
  const [searchList, setSearchList] = useState([])
  const [topic, setTopic] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            headers: {
              Authorization: `Bearer ${DOSTRUP}`,
            },
          }
        );
        console.log("Trending:", response.data);
        setStartList(response.data.results);
      } catch (error) {
        console.error("Ошибка при получении трендов:", error);
      }
    };
  
    const searchData = async () => {
      try {
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
      }
    };
  
    if (topic.trim()) {
      searchData();
    } else {
      fetchData();
    }
  }, [topic]);
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/movies" element={<Movies list={searchList} set={setTopic}/>} />
        <Route path="/" element={<Home list={startList} />} />
        <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>
    </div>
  );
};

