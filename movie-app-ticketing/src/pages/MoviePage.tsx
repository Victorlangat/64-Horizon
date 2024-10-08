// src/pages/MoviePage.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  useMediaQuery,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useGetSingleMovieMutation } from "@/Api/services";
import { styled, useTheme } from "@mui/system";
import DefaultLayout from "@/Layouts/DefaultLayout";
import router from "next/router";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import 'react-calendar/dist/Calendar.css';
import {
  MovieCard,
  MovieCardMedia,
  MovieCardContent,
} from "@/StyledComponents/Landing";
import { useRouter } from "next/router";
import Calendar from 'react-calendar';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
}));

const VideoContainer = styled(Box)({
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
  width: "100%",
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const CinemasContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "20px",
  marginTop: "20px",
}));

const CinemaCard = styled(Card)(({ theme }) => ({
  flex: "1 1 calc(100% - 20px)",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
  //   boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.divider}`,
}));

const MovieDetails = styled(Box)({
  padding: "20px",
});

const BannerImage = styled("img")({
  width: "auto",
  height: "400px",
  marginBottom: "20px",
});

const MoviePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const [getmovie, { isLoading, error }] = useGetSingleMovieMutation();
  const [MovieData, setMovieData] = useState();
  const [value, onChange] = useState<Value>(new Date());

  const getSingleMovie = async () => {
    try {
      const response = await getmovie({ id: 1 });
      if (response.data) {
        const data = response.data;
        setMovieData(data);
      } else if (response.error) {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Login failed");
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, []);
  const fetchedMovie = {
    title: "The Godfather",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    bio: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    bannerUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg", // Add the banner URL here
    description: "This is a detailed description of the example movie.",
    actors: ["Actor 1", "Actor 2", "Actor 3"],
    cinemas: [
      {
        name: "Sarit center Cinemax",
        times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
      }
    ],
  };

  return (
    <DefaultLayout>
      <Box sx={{ width: "100%", background: "#001232" }}>
        <Container sx={{ pt: 20, maxWidth: "97vw", m: "auto", display:"flex", flexWrap:"wrap" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "#fff" }}
              >
                {fetchedMovie.title}
              </Typography>
              <VideoContainer>
                <iframe
                  src={fetchedMovie.videoUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoContainer>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={3}>
                <MovieCard
                  key={fetchedMovie.title}
                  onClick={() => {
                    router.push("/MoviePage");
                  }}
                >
                  <MovieCardMedia
                    sx={{ width: "100%" }}
                    image={fetchedMovie.bannerUrl}
                  />
                  <MovieCardContent>
                    <Typography variant="h5" component="div">
                      {fetchedMovie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {fetchedMovie.bio}
                    </Typography>
                  </MovieCardContent>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                </MovieCard>
              </Grid>
            )}
            <Grid item xs={12} md={3}>
              <CinemasContainer>
                <Typography variant="h5" component="h2" gutterBottom color="#fff">
                  Select Date &amp; Time
                </Typography>
                <Grid container spacing={2}>
                  {fetchedMovie.cinemas.map((cinema, index) => (
                    <Grid item key={index} xs={12}>
                      <CinemaCard>
                        <CardContent>
                        <Calendar onChange={onChange} value={value} />
                          <List>
                            {cinema.times.map((time, timeIndex) => (
                              <ListItem
                                key={timeIndex}
                                sx={{
                                  mb: 2,
                                  borderRadius: "10px",
                                  background: "rgb(10,31,95, 0.2)",
                                  "&:hover": {
                                    background: "rgb(10,31,95, 0.4)",
                                    transition: "0.3s ease-in-out",
                                    cursor: "pointer",
                                  },
                                }}
                                onClick={() => {
                                  router.push("/bookseat");
                                }}
                              >
                                <ListItemText primary={time} />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </CinemaCard>
                    </Grid>
                  ))}
                </Grid>
              </CinemasContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DefaultLayout>
  );
};

export default MoviePage;
