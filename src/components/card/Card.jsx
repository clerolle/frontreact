"use client";
import React, {useState} from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green, orange, red } from '@mui/material/colors';
import EditUser from '../edituser/EditUser';
import { useSelector } from 'react-redux';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions?.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ReviewCard(props) {

  // local state
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date());
  
  const day =
      date.getDate() > 9
          ? date.getDate().toString()
          : '0' + date.getDate().toString();
  const month =
      date.getMonth() > 8
          ? (date.getMonth() + 1).toString()
          : 0 + (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();
    
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props);
  return (
    <Card  sx={{ maxWidth: 400 }}  style={{background: "grey", margin: "2rem auto"}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditUser info={props?.info}/>
          </IconButton>
        }
        title={props.info?.name}
        subheader={props.info?.address}
      />
      {/* <CardMedia
        component="img"
        height="90"
        image={props.user?.img}
        alt="fruta"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Telefono: {props.info?.phone }
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Género:</Typography>
          <Typography paragraph>
           {props.user.gender}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    
  );
}