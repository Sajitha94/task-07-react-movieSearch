import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "./MovieFetchData";

function HeaderMovie() {
  const navigate = useNavigate();
  const { favoriteList } = useMovieData();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <LiveTvIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              padding: "10px",
              fontSize: { xs: "16px", sm: "18px" },
            }}
            onClick={() => navigate(`/`)}
          >
            Moviess
          </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button
              color="inherit"
              sx={{ fontSize: { xs: "13px", sm: "16px" }, padding: "5px" }}
               onClick={() => navigate(`/`)}
            >
              <SearchIcon
                sx={{
                  margin: "5px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              />{" "}
              Search
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: { xs: "13px", sm: "16px" }, padding: "5px" }}
              onClick={() => navigate(`/favoritelist`)}
            >
              {" "}
              <BookmarksIcon
                sx={{
                  margin: "5px",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              />{" "}
              Favorites ({favoriteList.length})
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderMovie;
