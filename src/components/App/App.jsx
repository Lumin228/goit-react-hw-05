// src/components/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const KEY_ACCESS = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM4NGU0YjI0MDRlZGU5YjYxMzVhZTBkMGZjZDExYiIsIm5iZiI6MTc0NjM1MzUzNy44MTUsInN1YiI6IjY4MTczZDgxMmIzODNhYTFjOTU3Yzg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lWiI1-TR0vvdobuSbjFmoeIDgx9Cp87XpaVn_FaF16M"
const KEY = "cf384e4b2404ede9b6135ae0d0fcd11b"
export const App = () => {

  const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(url, options).then(response => console.log(response)).catch(err => console.error(err));


  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="https://www.youtube.com/">Products</Link>
      </nav>
    </div>
  );
};

