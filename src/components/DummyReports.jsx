import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const DummyReports = () => {
  return (
    <>
      <Card  elevation = {4} sx ={{ height: 80, width: 1000, borderRadius: 5}} >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 36,
                        fontWeight: "bold",
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"
                      }}>
                    Cancer
                    </Typography>
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"}}>
                    Annapurna Neuro Hospital
                    </Typography>
                </Paper>
                </Grid>
                <Grid item>
                <Paper elevation ={0} justifyContent="Center" sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                    <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "50px"
                      }}>
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    >
                    2022-04-27
                    </Typography>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </CardActionArea>
      </Card>
      <Box m={0} pt={3} />
      <Card  elevation = {4} sx ={{ height: 80, width: 1000, borderRadius: 5}} >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 36,
                        fontWeight: "bold",
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"
                      }}>
                    Cancer
                    </Typography>
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"}}>
                    Annapurna Neuro Hospital
                    </Typography>
                </Paper>
                </Grid>
                <Grid item>
                <Paper elevation ={0} justifyContent="Center" sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                    <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "50px"
                      }}>
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    >
                    2022-04-27
                    </Typography>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </CardActionArea>
      </Card>
      <Box m={0} pt={3} />
      <Card  elevation = {4} sx ={{ height: 80, width: 1000, borderRadius: 5}} >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 36,
                        fontWeight: "bold",
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"
                      }}>
                    Cancer
                    </Typography>
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "75px"}}>
                    Annapurna Neuro Hospital
                    </Typography>
                </Paper>
                </Grid>
                <Grid item>
                <Paper elevation ={0} justifyContent="Center" sx={{height: 100, width: 200}} style={{backgroundColor: 'lightgrey'}}>
                    <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}
                    style={{ 
                      justifyContent: 'center',
                      flex:1,
                      lineHeight: "50px"
                      }}>
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 16,
                        color: "textPrimary",
                    }}
                    >
                    2022-04-27
                    </Typography>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </CardActionArea>
      </Card>
    </>
  )
}

export default DummyReports
