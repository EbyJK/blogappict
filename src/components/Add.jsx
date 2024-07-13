import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    var [inputs,setInputs] = useState({blogname:'',description:'',authorname:''});
    const inputHandler=(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value});
        console.log(inputs);



    };

  return (
    <div>
        <br />
        <br />
        <TextField variant='outlined' label='blogname' onChange={inputHandler} name="blogname" value={inputs.blogname}>blogname</TextField> &nbsp;
        <br /><br />
        <TextField variant='outlined' label='description'onChange={inputHandler} name="description" value={inputs.description} >description</TextField> &nbsp;
        <br /><br />
        <TextField variant='outlined' label='authorname' onChange={inputHandler} name="authorname" value={inputs.authorname}>authorname</TextField> &nbsp;
        <br /><br />
        
        <br /><br />
        <Button variant='contained' color='secondary'>Submit</Button>


    </div>
  )
}

export default Add
