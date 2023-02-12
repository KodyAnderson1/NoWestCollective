import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../App.css";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundColor: "inherit",
  border: "none",
}));

const AboutUs = () => {
  const matches = useMediaQuery("(min-width:653px)");

  return (
    <>
      <Grid container direction="row" sx={{ height: "94.5%" }}>
        <Grid xs={0} sm={6} md={4}>
          <Item
            sx={{
              backgroundImage: "url('/assets/COVERPDF.jpg')",
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={8}>
          <Item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              sx={{
                width: "60rem",
                padding: "3rem",
                backgroundColor: "inherit",
                borderRadius: "10%",
              }}>
              <Typography variant={matches ? "h1" : "h2"} sx={{ paddingBottom: "1.25rem" }}>
                About Us.
              </Typography>
              <Grid container direction="row" spacing={1}>
                <Grid sx={{ maxWidth: "25rem" }}>
                  <div style={{ fontSize: "1.8rem" }}>
                    A multimedia-based organization dedicated to creating new avenues of expression
                    for its members.
                  </div>
                </Grid>

                <Grid sx={{ maxWidth: "25rem" }}>
                  The organization will emphasize student work, including but not limited to visual
                  art such as short films, self-contained theater performances, painting, and
                  creative writing (these will be workshopped weekly), and presentations both on
                  campus and locally. The organization will serve to create a community that both
                  supports and pushes its members to work outside the bounds of their comfort zone.
                  Our end goal will be to create and maintain a student-led and edited magazine to
                  showcase both the work of members and other UWF students/local artists. Find us on{" "}
                  <Link
                    target="_blank"
                    to="https://uwf.campusgroups.com/feeds?type=club&type_id=35509&tab=home">
                    Argo Pulse
                  </Link>{" "}
                  and{" "}
                  <Link target="_blank" to="/">
                    Instagram!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
