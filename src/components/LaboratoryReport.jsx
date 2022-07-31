import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DummyReports from "./DummyReports";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from "@mui/material";

const LaboratoryReport = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 580,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchOutlinedIcon />
          </IconButton>
        </Paper>
        <IconButton size="large">
          <FilterAltOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </div>
      <Box m={1} pt={3} />
      <Grid container spacing={2}>
      <Grid item xs={2} />
      <Card  elevation= {4} sx ={{ height: 200 , width: 800}}>
        <Grid  container spacing={2} >
          <Grid item xs={0.05} />
          <Grid item xs={4}>
          <Typography 
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            color: "textPrimary",
            }}>
            Date:
            <Box m={0} pt={2} />
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="From:"
              renderInput={(params) => <TextField{...params} />}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3.75}>
          <Typography 
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            color: "textPrimary",
            }}>
            Hospital:
            </Typography>
            <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your hospital"
            variant="standard"
            >
            </TextField>
          </Grid>
          <Grid item xs={4}>
          <Typography 
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              color: "textPrimary",
              }}>
            Category:
            </Typography>
            <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your category"
            variant="standard"
            >
            </TextField>
          </Grid>
          <Grid item xs={0.05} />
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="To:"
              renderInput={(params) => <TextField{...params} />}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3.75}></Grid>
          <Grid item xs={1}>
          <button >Reset</button>
          </Grid>
          <Grid item xs={1}>
          <button>Apply</button>
          </Grid>
        </Grid>
        <Box m={0} pt={1} />
      </Card>
      </Grid>
      <Box m={1} pt={2} />
      <Typography 
          sx={{
            fontSize: 22,
            fontWeight: "bold",
            color: "textPrimary",
            }}>
            Number of Reports:3
            </Typography>
      <Box m={1} pt={2} />
      <DummyReports />
    </>
  );
};

export default LaboratoryReport;
