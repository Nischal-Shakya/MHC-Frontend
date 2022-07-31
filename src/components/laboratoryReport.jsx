import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

const laboratoryReport = () => {
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
      <h2>Number of Reports:3</h2>
      <Paper elevation={3} variant="outlined" sx={{ height: 100}}>
        <h1>Cancer</h1>
      </Paper>
      &nbsp; 
      <Paper elevation={3} variant="outlined" sx={{ height: 100 }}>
      <h1>Cancer</h1>
      </Paper>
      &nbsp; 
      <Paper elevation={3} variant="outlined" sx={{ height: 100 }}>
      <h1>Cancer</h1>
      </Paper>
    </>
  );
};

export default laboratoryReport;
