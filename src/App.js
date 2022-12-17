import { React, useState } from "react";
import { Box, ThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return <ThemeProvider theme={theme}>
    <Header title="Anime Osusume" postJob="true" dashboard="true" />
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar setAnime={setAnime} setIsLoading={setIsLoading} />

        {!isLoading ? anime.map(name => (
          <JobCard name={name} />
        ))
          :
          <p>Loading...</p>}
      </Grid>
    </Grid>
  </ThemeProvider>
};
