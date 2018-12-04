import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    maxWidth: 300,
    margin: 'auto',
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const tempView = (props) => {
  const {
    classes, celsius, fahrenheit, kelvin, handleChange,
  } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h6" component="h3" color="primary">
        Temperature converter.
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-celsius"
          label="Celsius"
          className={classes.textField}
          name="celsius"
          value={celsius}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-fahrenheit"
          label="Fahrenheit"
          className={classes.textField}
          name="fahrenheit"
          value={fahrenheit}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-kelvin"
          label="Kelvin"
          className={classes.textField}
          name="kelvin"
          value={kelvin}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    </Paper>
  );
};

tempView.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
  }).isRequired,
  celsius: PropTypes.string.isRequired,
  fahrenheit: PropTypes.string.isRequired,
  kelvin: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(tempView);
