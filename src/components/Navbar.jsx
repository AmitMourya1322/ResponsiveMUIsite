import { AppBar,  Avatar,  Badge,  Box,  InputBase,  styled,  Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});

const Search = styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({theme})=>({
    display:'none',
    alignItems:'center',
    gap:'20px',
    [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
}));

const UserBox= styled(Box)(({theme})=>({
    display:'none',
    alignItems:'center',
    gap:'10px',
    [theme.breakpoints.down("sm")]:{
        display:'flex'
    }
}))
const Navbar = () => {
    const[open,setOpen] = useState(false);
  return (
  <AppBar position='sticky'>
    <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
        MouryaWorks
        </Typography>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
            <Badge badgeContent={4} color="error">
            <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
            </Badge>
            <Badge >
                <Avatar sx={{width:30, height:30}} src="https://pixabay.com/illustrations/profile-profile-pic-human-face-2398783/"
                 onClick={e=>setOpen(true)}
                />
            </Badge>
        </Icons>
        <UserBox  onClick={e=>setOpen(true)}>
        <Avatar 
        sx={{width:30, height:30}} 
        src="https://pixabay.com/illustrations/profile-profile-pic-human-face-2398783/"
       
        />
        <Typography>Amit</Typography>
        </UserBox>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        
        open={open}
        onClose={e=>setOpen(false)}
        TransitionComponent={Fade}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </StyledToolbar>
  </AppBar>
  )
}

export default Navbar
