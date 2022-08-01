import React, { useState } from "react"
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DummyReports from "./DummyReports";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Filter from "./Filter"; 
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const LaboratoryReport = () => {
  const [click,setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const handleClose =() => {
    setClick(false);
  }
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
        <IconButton size="large" onClick= {handleClick} >
          {click===false ?<FilterAltOutlinedIcon />:<FilterAltIcon />}
        </IconButton>
        <IconButton size="large">
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </div>

      {click===true? <Filter close={handleClose}/> : <Box m={1} pt={3} />} 
      <box m= {1} pt= {3} />
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
