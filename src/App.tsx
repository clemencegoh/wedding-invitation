import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactiveCard from "components/ReactiveCard";
import { baseUrl } from "./constants";

const paths = {
  home: `/${baseUrl}`,
  tictactoe: `/${baseUrl}/games/tictactoe`,
};

function Home() {
  return <ReactiveCard />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
