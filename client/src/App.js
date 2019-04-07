import React, {
  Component
} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomePage from './components/HomePage.js';
import AppStyles from './styles/AppStyle.js'

class App extends Component {

  render() {
    
    const { classes } = this.props;
    return ( 
    <div className={classes.root}>
      <AppBar position="static" className ={classes.appbar}>
        <Toolbar>
          
          <Typography component='h1' variant="h5" color="inherit"
           className={classes.grow}>
            proxy Brain
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
      <HomePage />
      </div>
    </div> 
    );
  }
}
export default withStyles(AppStyles)(App);