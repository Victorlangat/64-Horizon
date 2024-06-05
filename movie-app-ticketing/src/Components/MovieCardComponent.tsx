import {MovieCard,  MovieCardMedia, MovieCardContent } from "@/StyledComponents/Landing";
import { Typography } from "@mui/material";
import React from "react";

function MovieCardComponent() {
  const movies = [
    {
      title: "The Godfather",
      image: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
      bio: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "The Dark Knight",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQabt5_iESscctssvn8VxDbvnV7i9C42UyLOCWkFdqwJQE0VZYeg2qcXEcYYLh8td8Zna3zA5Nrk7s7SDElRyhKYiIf2AwvJ7F3mKVis5c",
      bio: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
    {
      title: "Inception",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      bio: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    },
    {
      title: "Interstellar",
      image: "https://m.media-amazon.com/images/I/91g-WjXKe7L._AC_UF894,1000_QL80_.jpg",
      bio: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
  ];
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.title}>
          <MovieCardMedia
          sx={{width:"100%"}}
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
    </>
  );
}

export default MovieCardComponent;
