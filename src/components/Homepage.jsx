import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../App.css";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: "20rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const Homepage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:653px)");
  const titleFontSize = matches ? "4rem" : "2rem";
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h1"
        sx={{
          paddingTop: "3.8rem",
          paddingBottom: "1rem",
          fontSize: titleFontSize,
          fontWeight: "bold",
        }}>
        No. West Collective
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={8}>
          <Item
            onClick={() => navigate("/zine")}
            className="card"
            sx={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            }}>
            <Box display="flex">
              <Typography
                variant="h4"
                sx={{
                  // color: "black",
                  fontWeight: "bold",
                  padding: "1rem 0rem 2rem 1rem",
                }}>
                Check out our latest Zine!
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <Item
            onClick={() => navigate("/about")}
            className="card"
            sx={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')",
            }}>
            <Box display="flex">
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "1rem 0rem 2rem 1rem",
                }}>
                About Us
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <Item
            onClick={() => navigate("/events")}
            className="card"
            sx={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            }}>
            <Box display="flex">
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "1rem 0rem 2rem 1rem",
                }}>
                Events
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={8}>
          <Item
            className="card"
            sx={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            }}>
            <Box display="flex">
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "1rem 0rem 2rem 1rem",
                }}></Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
