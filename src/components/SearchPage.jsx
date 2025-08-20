import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, NativeSelect } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useMovieData } from "./MovieFetchData";
import { useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function SearchPage() {
  const { setSearchTerm } = useMovieData();
  const inputRef = useRef();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  function handleSearch() {
    const value = inputRef.current.value;

    if (value.trim() !== "") {
      setSearchTerm(value);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <Box className="flex flex-col md:flex-row gap-5 lg:mx-24 md:mx-10 mx-3  my-10 justify-between">
      <Box className="flex flex-row w-full gap-3">
      <Search className="w-full px-5 flex items-center">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          inputRef={inputRef}
          onKeyDown={handleKeyDown}
        />
      </Search>
      <Button
        sx={{ backgroundColor: "#5da9e9", borderRadius: "6px", width: "100px" ,fontSize:{xs:"12px",sm:"14px"}}}
        onClick={handleSearch}
      >
        search
      </Button>
      </Box>
      <FormControl
        sx={{
          backgroundColor: "#13161a",
          border: "1px solid #1d232b",
          borderRadius: "5px",
          color: "white",
          width: "10vw",
          paddingLeft: "10px",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width:"150px"
        }}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ color: "white", padding: "0", fontSize: "12px" }}
        >
          TYPE
        </InputLabel>
        <NativeSelect
          sx={{
            color: "white",
            backgroundColor: "#13161a",
            fontSize: "12px",
            "& option": {
              backgroundColor: "#13161a",
              color: "white",
            },
            "& select": {
              backgroundColor: "#13161a",
              color: "white",
            },
          }}
          defaultValue="all"
          disableUnderline
          IconComponent={(props) => (
            <ArrowDropDownIcon {...props} style={{ color: "white" }} />
          )}
        >
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SearchPage;
