import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Nav from "../Nav/index";
import Typography from '@material-ui/core/Typography';
import './style.css';

class StudPage extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <h2>Welcome, Student!</h2>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translate(-50%, -50%)'
        }}>

          <List>
            <ListItem button component="a" href="/map">
              <i className="material-icons prefix">near_me</i>
              <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30, fontFamily: '' }}>
                Find  a Studio</Typography>} />
            </ListItem>
            <br></br>
            <ListItem button component="a" href="https://www.google.com">
              <i className="material-icons prefix">video_label</i>
              <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                Watch a Video</Typography>} />
            </ListItem>
            <br></br>
            <ListItem button component="a" href="/asana">
              <i className="material-icons prefix">add_circle</i>
              <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                Build a Sequence</Typography>} />
            </ListItem>
            <br></br>
            <ListItem button component="a" href="/breathe">
              <i className="material-icons prefix">mood</i>
              <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                Breathe</Typography>} />
            </ListItem>
            <br></br>
          </List>
        </div>
      </div>


    );
  }
}


export default StudPage
