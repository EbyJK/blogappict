import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[output,setOutput]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{console.log(res.data);
            setOutput(res.data)
        })
        .catch((err)=>{console.log(err);})
    },[])
  return (
    <div>
        <Typography variant='h3'>Posts</Typography>
      <Grid container spacing={2}>
        {output.map((val,i)=>{
          return(
            <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 360}}>
      <CardMedia
        sx={{ height: 200 }}
        id={val.id}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {val.id}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

        </Grid>

          )
        })}
        </Grid>
        
    </div>
  )
}

export default Home