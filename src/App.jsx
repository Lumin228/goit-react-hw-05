// src/components/App.jsx
import { Routes, Route, Link } from "react-router-dom";


export const App = () => {
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

