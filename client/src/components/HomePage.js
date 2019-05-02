import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
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
            year: '',
            day: '',
            description: '',
            labelWidth: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.onChangeDate = this
            .onChangeDate
            .bind(this);
    }
    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM
                .findDOMNode(this.InputLabelRef)
                .offsetWidth
        });
        this.onChangeDate(this.state.date)
    }
    async onSave() {
        const requestObj = {
            date: this.state.day,
            label: this.state.label,
            year: this.state.year,
            dayOfMonth: this.state.day,
            description: this.state.description
        }
        console.log(JSON.stringify(requestObj))
        const request = {
            method: "POST",
            body: JSON.stringify(requestObj),
            headers: {
                "Content-Type": "application/json"
            }
        }
        await fetch('/note/save', request)
            // .then(res => res.json())
            .then(res => { this.props.showMessageKey("Note Saved")
                console.log("--->", res);
            })
    }
    onChangeDate = (date) => {

        const options = {
            month: 'long',
            day: 'numeric'
        }

        const dayMonth = date.toLocaleDateString('en-EG', options)
        console.log('Date: ', dayMonth)
        this.setState({
            year: date.getFullYear(),
            day: dayMonth,
            date
        })
    }
    handleChange = event => {

        switch (event.target.id) {
            case 'outlined-multiline-static':
                this.setState({description: event.target.value});
                break;
            default:
                this.setState({label: event.target.value});
                break;

        }

    };
    render() {
        const {classes} = this.props;
        return (
            <div >

                <Paper className="homePageContentDate">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className={classes.pickerField}
                            label="Date"
                            dialog='true'
                            dateFormat='YYYY'
                            variant='outlined'
                            okToConfirm='false'
                            value={this.state.date}
                            onChange={this.onChangeDate}/>

                    </MuiPickersUtilsProvider>
                </Paper>
                <Typography className ="homeTitle" variant="title" gutterBottom>
                    On this day
                </Typography>
                <Paper className="homePageContent"></Paper>
                <Typography className ="homeTitle" variant="title" gutterBottom>
                    Record event
                </Typography>
                <Paper className="homePageContent">

                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        onChange={this.handleChange}
                        rows="6"
                        margin="normal"
                        variant="outlined"/>
                    <div className="labelContainer">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                                htmlFor="outlined-label-simple">
                                Choose Label
                            </InputLabel>
                            <Select
                                value={this.state.label}
                                onChange={this.handleChange}
                                input={< OutlinedInput labelWidth = {
                                this.state.labelWidth
                            }
                            name = "label" id = "outlined-label-simple" />}>
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

                    <Button
                        variant="contained"
                        onClick={() => this.onSave()}
                        color="primary"
                        className={classes.button}>
                        Save
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(HomePageStyle)(HomePage);