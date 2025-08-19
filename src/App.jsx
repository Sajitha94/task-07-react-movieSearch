import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import HeaderMovie from "./components/HeaderMovie";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
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
                <HeaderMovie />
                <SearchPage />
                <MovieCard />
              </Box>
            }
          ></Route>
          <Route path="/moviedetail/:omdId" element={<ProductDetails/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
