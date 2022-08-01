import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';


const Filter = ({close}) => {
  return (
    <>
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
          <button onClick={close} >Reset</button>
          </Grid>
          <Grid item xs={1}>
          <button onClick={close} >Apply</button>
          </Grid>
        </Grid>
        <Box m={0} pt={1} />
      </Card>
      </Grid>
      <Box m={1} pt={2} />
    </>
  )
}

export default Filter
