// src/components/App.jsx

import { Routes, Route } from "react-router-dom";
import { Movies } from "../Movies/Movies";


export const App = () => {
  return (
    <div>
      <nav>
        <Link to="../Movies/Movies">Movies</Link>
      </nav>
    </div>
  );
};

