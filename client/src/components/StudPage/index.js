import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Nav from "../Nav/index";
import Typography from '@material-ui/core/Typography';
import './style.css';

class InstPage extends React.Component {

    
    
    
    
    render() {
        return (
            <div>
                <Nav />
                <div className="container landing">
              
                <div className="center-align" >
                  <h2>Welcome, Student!</h2>
                    <List className="instpage">
                        <ListItem button component="a" href="/map">
                            <i className="material-icons prefix">near_me</i>
                            <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30, fontFamily: '' }}>
                                Find  a Studio</Typography>} />
                        </ListItem>

                        <ListItem button component="a" href="https://www.google.com">
                            <i className="material-icons prefix">videocam</i>
                            <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                                Watch A Video</Typography>} />
                        </ListItem>

                        <ListItem button component="a" href="/asana">
                            <i className="material-icons prefix">add_circle</i>
                            <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                                Build a Sequence</Typography>} />
                        </ListItem>

                        <ListItem button component="a" href="/breathe">
                            <i className="material-icons prefix">mood</i>
                            <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                                Breathe</Typography>} />
                        </ListItem>
                        <ListItem button component="a" href="/saved">
                            <i className="material-icons prefix">favorite</i>
                            <ListItemText disableTypography primary={<Typography type="h3" style={{ color: 'purple', fontSize: 30 }}>
                                MySequences</Typography>} />
                        </ListItem>

                    </List>
                    </div>
                </div>
           </div>
                


        );
    
    }
}
export default InstPage;