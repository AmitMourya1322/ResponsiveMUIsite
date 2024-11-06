import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  
];
const Rightbar = () => {
  return (
   <Box flex={2} p={2}
   sx={{display:{xs:'none',sm:"block"}}}
   >
    <Box position='fixed'width={300} mt={2} >
    <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
    <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_640.jpg" />
      <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg" />
      <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912_640.jpg" />
      <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2020/07/08/19/13/girl-5384878_640.jpg" />
      <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2019/11/30/12/10/girl-4663125_640.jpg" />
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/05/01/19/40/girl-748932_640.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100}>
      Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h6' fontWeight={100}>
      Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_640.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2015/11/03/13/47/love-1020869_640.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
  
   </Box>
  )
}

export default Rightbar