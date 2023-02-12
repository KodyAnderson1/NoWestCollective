import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ScheduleIcon from "@mui/icons-material/Schedule";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { useMediaQuery } from "@mui/material";
import { LAST_UPDATED, meetingTimesData } from "../model/MeetingTimesData";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const dateGridStyle = {
  backgroundColor: "#9ab2ae",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const MeetingTimes = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          fontSize: "3rem",
          fontWeight: "bold",
        }}>
        Upcoming Events
      </Typography>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", fontSize: "1rem", fontStyle: "italic" }}>
        {LAST_UPDATED}
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "2rem",
          maxHeight: "80vh",
        }}>
        {meetingTimesData?.map((element, index) => {
          return <SingleMeeting key={index} exampleMeet={element} />;
        })}
      </Container>
    </>
  );
};

const SingleMeeting = (props) => {
  const matches = useMediaQuery("(min-width:500px)");
  const mb = matches ? { marginBottom: "1rem" } : { marginBottom: "1rem" };
  const exampleMeet = props.exampleMeet;

  return (
    <Paper elevation={6} sx={mb}>
      <Grid container>
        <Grid item xs={3} sm={1.5} sx={dateGridStyle}>
          <DatePortion exampleMeet={exampleMeet} />
        </Grid>
        <Grid item xs={9} sm={10.5} sx={{ backgroundColor: "#c0dfd9" }}>
          <MainPortion exampleMeet={exampleMeet} />
        </Grid>
      </Grid>
    </Paper>
  );
};

const DatePortion = (props) => {
  return (
    <Grid>
      <Grid fontSize="3rem" fontWeight="bold" marginBottom="-.7rem">
        {props.exampleMeet.date.day}
      </Grid>
      <Grid fontSize=".8rem" display="flex" justifyContent="center" fontWeight="bold">
        {props.exampleMeet.date.month}
      </Grid>
      <Grid fontSize=".8rem" display="flex" justifyContent="center" fontWeight="bold">
        {props.exampleMeet.date.year}
      </Grid>
    </Grid>
  );
};

const MainPortion = (props) => {
  return (
    <List>
      <ListItem sx={{ marginBottom: "-1rem" }}>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ fontSize: "3rem" }}
          primary={<Typography variant="h5">{props.exampleMeet.title}</Typography>}
        />
      </ListItem>

      <ListItem sx={{ marginBottom: "-1rem" }}>
        <ListItemIcon>
          <ScheduleIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ fontSize: "10rem" }}
          primary={
            <Typography
              sx={{
                fontSize: "1rem",
              }}>{`${props.exampleMeet.time.start}`}</Typography>
          }
        />
      </ListItem>
      {/* <ListItemText
          sx={{ fontSize: "10rem" }}
          primary={
            <Typography
              sx={{
                fontSize: "1rem",
              }}>{`${props.exampleMeet.time.start} - ${props.exampleMeet.time.end}`}</Typography>
          }
        />
      </ListItem> */}

      <ListItem>
        <ListItemIcon>
          <GpsFixedIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.exampleMeet.location.main}
          secondary={props.exampleMeet.location.details}
        />
      </ListItem>
    </List>
  );
};

export default MeetingTimes;
