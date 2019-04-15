import React, {
  Component
} from 'react';
import './App.css'; 
import {
  withStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomePage from './components/HomePage.js';
import AppStyles from './styles/AppStyle.js'
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

class App extends Component {
  state = {
    open: false,
    Transition: null,
    message : ''
  };
  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };

  showMessage = (message)=>{
    this.setState({ message : message, open: true, Transition :TransitionUp});
 
  }
  handleClose = () => {
    this.setState({ open: false });
  };
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
      <HomePage showMessageKey = {this.showMessage} />
      </div>
      <Snackbar
      bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />
    </div> 
    );
  }
}
export default withStyles(AppStyles)(App);