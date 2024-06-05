import DefaultLayout from "@/Layouts/DefaultLayout";
import {
  MainContainer,
  MovieCard,
  MovieCardMedia,
  MovieCardContent,
} from "@/StyledComponents/Landing";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

function Movies() {
  const movies = [
    {
      title: "Movie 1",
      image: "https://source.unsplash.com/1000x1000/?grinch",
      bio: "This is a short bio for Movie 1.",
    },
    {
      title: "Movie 2",
      image: "https://source.unsplash.com/1000x1000/?iron-man",
      bio: "This is a short bio for Movie 2.",
    },
    {
      title: "Movie 3",
      image: "https://source.unsplash.com/1000x1000/?marvel",
      bio: "This is a short bio for Movie 3.",
    },
    {
      title: "Movie 4",
      image: "https://source.unsplash.com/1000x1000/?spiderman",
      bio: "This is a short bio for Movie 4.",
    },
    {
      title: "Movie 1",
      image: "https://source.unsplash.com/1000x1000/?grinch",
      bio: "This is a short bio for Movie 1.",
    },
    {
      title: "Movie 2",
      image: "https://source.unsplash.com/1000x1000/?iron-man",
      bio: "This is a short bio for Movie 2.",
    },
    {
      title: "Movie 3",
      image: "https://source.unsplash.com/1000x1000/?marvel",
      bio: "This is a short bio for Movie 3.",
    },
    {
      title: "Movie 4",
      image: "https://source.unsplash.com/1000x1000/?spiderman",
      bio: "This is a short bio for Movie 4.",
    },
  ];

  return (
    <>
      <DefaultLayout>
        <MainContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "23px" },
                p: { xs: 2, md: 4 },
                width: "35%",
                fontWeight: "800",
              }}
            >
              Trending Movies Now
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "800",
                p: { xs: 2, md: 4 },
                width: "35%",
                textAlign: "right",
              }}
            >
              view all
            </Typography>
          </Box>
          {movies.map((movie) => (
            <MovieCard key={movie.title}>
              <MovieCardMedia
                // component="img"
                image={movie.image}
                // alt={movie.title}
              />
              <MovieCardContent>
                <Typography variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.bio}
                </Typography>
              </MovieCardContent>
            </MovieCard>
          ))}
        </MainContainer>
      </DefaultLayout>
    </>
  );
}

export default Movies;
