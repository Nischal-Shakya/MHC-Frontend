import React from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DummyReports from "./DummyReports";

const Dashboard = () => {
  return (
    <>
      <Grid container spaceing={2}>
        <Grid item xs={10}>
          <div className="Text-size">DOCTOR: Nischal Shakya</div>
          <Box m={0} pt={2} />
          <div className="Text-size">PATIENT: Dikshya Kunwar</div>
        </Grid>
        <Grid item xs={1}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "right",
            }}
            className="Text-size"
          >
            Annapurna Neuro Hospital
          </div>
        </Grid>
        <Grid item xs={1}>
          <div
            style={{
              display: "initial",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <IconButton size="large">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      {/* ANOTHER ONE */}
      <Box m={2} pt={3} />
      <Grid container spacing={10}>
        <Grid item xs={0.25} />
        <Grid item xs={3.5}>
          <Card
            className="App"
            style={{
              flex: 1,
              backgroundColor: "lightgray",
              borderRadius: 15,
            }}
            elevation={4}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "textPrimary",
                  }}
                >
                  5
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    color: "textPrimary",
                  }}
                >
                  LABORATORY REPORTS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3.5}>
          <Card
            elevation={4}
            className="App"
            style={{ flex: 1, backgroundColor: "lightgray", borderRadius: 15 }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "textPrimary",
                  }}
                >
                  2
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    color: "textPrimary",
                  }}
                >
                  IMMUNIZATION REPORTS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3.5}>
          <Card
            elevation={4}
            className="App"
            style={{ flex: 1, backgroundColor: "lightgray", borderRadius: 15 }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "textPrimary",
                  }}
                >
                  3
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    color: "textPrimary",
                  }}
                >
                  IMAGING REPORTS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box m={2} pt={3} />
      <h2>Latest Reports</h2>
      <Box m={0} pt={1} />
      <DummyReports />
    </>
  );
};

export default Dashboard;
