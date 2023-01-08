import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HotelsView from "./components/Hotels/HotelsView";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={2} mb={2} mr={1} ml={1}>
          <Grid item xs={4}>
            <HotelsView />
          </Grid>
          <Grid item xs={8}>
            <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwaEfseFwAfRTc3WSYu2lMq_BETBl3ZNY&v=3.exp&libraries=geometry"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`, width:'90%' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            {/* <GoogleMaps /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
