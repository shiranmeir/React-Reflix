import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
    },
    title: {
      flexGrow: 1,      
    },
  
  });

class Navbar extends Component {
    render() {
        const {classes}= this.props
        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  REFLIX
                </Typography>
                <div id="main-links" >
                    <Link to="/">Home  </Link>
                    <Link to="/catalog">Catalog</Link>
                </div>              
                </Toolbar>
            </AppBar>
          </div>
        );  
    }
}

export default withStyles(styles)(Navbar);





