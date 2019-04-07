import React, {Component} from 'react';
import {DateFormatInput} from 'material-ui-next-pickers'
// import HomePageStyle from './styles/HomePageStyle.js'
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactDOM from 'react-dom';

import Typography from '@material-ui/core/Typography';
const HomePageStyle = theme => ({
    button: {
        marginTop: theme.spacing.unit
    },
    formControl: {
        marginTop: 10,
        marginBottom: 10,
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    }
});
class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            label: '',
            name: 'label',
            labelWidth: 0
        }
    }

    onChangeDate = (date) => {
        console.log('Date: ', date)
        this.setState({date})
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const {classes} = this.props;
        return (
            <div >
                <Typography variant="title" gutterBottom>
                    Record event
                </Typography>
                <Paper className="homePageContent">

                    <DateFormatInput
                        name='date-input'
                        value={this.state.date}
                        onChange={this.onChangeDate}/>
                    <div className="labelContainer"> 
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="label-simple">Choose Label</InputLabel>
                            <Select
                                value={this.state.label}
                                onChange={this.handleChange}
                                inputProps={{
                                name: 'label',
                                id: 'label-simple'
                            }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.margin}>
                            Create Label
                        </Button>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows="6"
                        margin="normal"
                        variant="outlined"/>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Save
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(HomePageStyle)(HomePage);