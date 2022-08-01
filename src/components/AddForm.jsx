import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const categories = ["Immunization", "Laboratory", "Imaging", "Other"];

export default function AddForm() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>ADD YOUR NEW REPORT HERE !!!!</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Card
          elevation={4}
          className="App"
          style={{ backgroundColor: "lightgray", borderRadius: 15 }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={10.5} />
              <Grid item xs={1}>
                <IconButton sx={{ color: "red" }}>
                  <CancelIcon onClick={handleClose} fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <Box m={0} pt={3} />
            <Typography
              sx={{
                fontSize: 24,
                color: "textPrimary",
              }}
            >
              <Grid container spacing={8}>
                <Grid item xs={0.5} />
                <Grid item xs={0.5}>
                  Title:
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                  />
                </Grid>
              </Grid>
            </Typography>
            <Box m={0} pt={3} />

            <Typography
              sx={{
                fontSize: 24,
                color: "textPrimary",
              }}
            >
              <Grid container spacing={8}>
                <Grid item xs={0.5} />
                <Grid item xs={2}>
                  Category:
                </Grid>
                <Grid item xs={8}>
                  {
                    <TextField
                      select
                      label="Category"
                      helperText="Please select your category"
                      value={category}
                      onChange={handleChange}
                    >
                      {categories.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  }
                </Grid>
              </Grid>
            </Typography>
            <Box m={0} pt={3} />

            <Typography
              sx={{
                fontSize: 24,
                color: "textPrimary",
              }}
            >
              <Grid container spacing={8}>
                <Grid item xs={0.5} />
                <Grid item xs={2}>
                  Report Image:
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Grid>
              </Grid>
            </Typography>
            <Box m={2} pt={3} />

            <Typography
              sx={{
                fontSize: 24,
                color: "textPrimary",
              }}
            >
              <Button
                variant="contained"
                component="label"
                onClick={handleClose}
                size="large"
              >
                Submit
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Backdrop>
    </div>
  );
}
