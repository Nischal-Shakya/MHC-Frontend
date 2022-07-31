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
      <Card  variant="elevation" >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 45,
                        fontWeight: "bold",
                        color: "textPrimary",
                    }}>
                    Cancer
                    </Typography>
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 100}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}>
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
                    }}>
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 20,

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
      <Card  variant="elevation" >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 45,
                        fontWeight: "bold",
                        color: "textPrimary",   
                    }}
                    >
                    Cancer
                    </Typography>
                
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 100}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}
                    >
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
                    >
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 20,

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
      <Card  variant="elevation" >
      <CardActionArea>
      <Grid  container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="Space-around" spacing={8} style={{backgroundColor: 'lightgrey' }}>
              <Grid item >
                <Typography
                    sx={{
                        fontSize: 45,
                        fontWeight: "bold",
                        color: "textPrimary",
                        
                    }}

                    >
                    Cancer
                    </Typography>
                
              </Grid>
              <Grid item>
                <Paper elevation ={0} sx={{height: 100, width: 100}} style={{backgroundColor: 'lightgrey'}}>
                <Typography
                    sx={{
                        fontSize: 20,
                        color: "textPrimary",
                    }}
                    >
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
                    >
                    Date:
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: 20,

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
