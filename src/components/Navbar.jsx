import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 15 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
           <Link to={'/home'}> 
           <Button  variant='contained' color="secondary">HOME</Button>&nbsp;&nbsp;
          </Link> 
          <Link to={'/add'}> 
           <Button variant='contained' color="secondary">ADD FORM</Button>&nbsp; 
           </Link> 
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
export default Navbar