import Head from "next/head";
import { Inter } from "next/font/google";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { MainContainer } from "@/StyledComponents/Landing";
import { Box, Link, Typography } from "@mui/material";
import TheatreCard from "@/Components/TheatreCard";
import ContactUs from "@/Components/Contact";
import MovieCardComponent from "@/Components/MovieCardComponent";
import {useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const nairobiTheatres = [
    {
      title: "The Kenya National Theatre",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOLpXoieqe3cE1a-EuG4s-UbLRr59jaCrO6qnEO=s680-w680-h510",
      bio: "A historic theatre in Nairobi hosting a range of performances including plays, concerts",
    },
    {
      title: "Alliance Francaise",
      image: "https://af-france.fr/wp-content/uploads/2019/01/01_prestige.jpg",
      bio: "A cultural centre in Nairobi hosting theatrical performances, concerts, and exhibitions, promoting French culture.",
    },
    {
      title: "Goethe-Institut",
      image:
        "data:image/jpeg;base64,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",
      bio: "A cultural institution in Nairobi offering contemporary arts, theatre performances",
    },
    {
      title: "The Phoenix Players Theatre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSRmJbHJyJKMx1GZ-lm8SkpMzbEvqBYV-Gg&s",
      bio: "A popular theatre in Nairobi producing a variety of plays, from classic dramas to modern comedies.",
    },
    {
      title: "Braeburn Theatre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwgsHxh6z0sw9kMrla1i6QI4KRbBIZ7bWUg&s",
      bio: "Part of Braeburn Schools, hosting school productions and community theatre events in Nairobi.",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <MainContainer>
          {/* <Box
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
          </Box> */}
          {nairobiTheatres.map((movie) => (
            <></>
            // <TheatreCard
            //   key={movie.title}
            //   title={movie.title}
            //   image={movie.image}
            //   bio={movie.bio}
              
            // />
          ))}
          <MovieCardComponent />
        </MainContainer>
        <ContactUs />
      </DefaultLayout>
    </>
  );
}
