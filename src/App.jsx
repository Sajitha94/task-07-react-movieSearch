import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import HeaderMovie from "./components/HeaderMovie";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ProductDetails from "./pages/ProductDetails";
import FavoriteList from "./pages/FavoriteList";
import { useMovieData } from "./components/MovieFetchData";

function App() {

 
  return (
    <>
      <Router>
        <HeaderMovie />
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                {" "}
                
                <SearchPage />
                <MovieCard />
              </Box>
            }
          ></Route>
          <Route path="/moviedetail/:omdId" element={<ProductDetails/>}></Route>
          <Route path="/favoritelist" element={<FavoriteList/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
