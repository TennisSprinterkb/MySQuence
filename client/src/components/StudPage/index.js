import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Nav from"../Nav/index";
import Typography from '@material-ui/core/Typography';
import './style.css';

class StudPage extends React.Component {

    render() {
        return (
          <div> 
          <Nav />
            <h2>Welcome, Student!</h2>
            <div className="center-align">
      
            <List>
            <ListItem  button component="a" href="/map"> 
            <i class="material-icons prefix">near_me</i>
            <ListItemText disableTypography primary={<Typography type="h1" style={{ color: '#8e24aa', fontSize: 30, fontFamily: '' }}>
            Find  a Studio</Typography>}/> 
            </ListItem>
            <br></br>
            <ListItem  button component="a" href="https://www.google.com">
            <i class="material-icons prefix">video_label</i>
            <ListItemText  disableTypography primary={<Typography type="h1" style={{ color: '#8e24aa', fontSize: 30 }}>
            Watch a Video</Typography>}/>
            </ListItem>
            <br></br>
            <ListItem button component="a" href="https://www.google.com">
            <i class="material-icons prefix">add_circle</i>
            <ListItemText  disableTypography primary={<Typography type="h1" style={{ color: '#8e24aa', fontSize: 30 }}>
            Build a Sequence</Typography>}/>
            </ListItem>
            <br></br>
            <ListItem button component="a" href="https://www.google.com">
            <i class="material-icons prefix">mood</i>
            <ListItemText  disableTypography primary={<Typography type="h1" style={{ color: '#8e24aa', fontSize: 30 }}>
            Breathe</Typography>}/>
            </ListItem>
            <br></br>
            </List>
           </div>
           </div>
 
 
        );
    }
 }
    

export default StudPage
