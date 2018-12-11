import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Router from "next/router";

const styles = theme => ({
  wrapper: {
    overflow: "hidden",
    padding: theme.spacing.unit * 3
  },
  card: {
    width: "1000px"
  },
  MuiCardHeader: {
    title: {
      fontSize: "1.5rem"
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  edit: {
    marginLeft: "5px"
  },
  group: {
    flexDirection: "row"
  }
});

class EditUser extends React.Component {
  render() {
    const {classes} = this.props;
    console.log(this.props);

    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid item lg={12} md= {12} xs={12} sm={12}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe">
                      <i className="material-icons">
                      person_add
                      </i>
                    </Avatar>
                  }
                  action={
                    <div>
                      <Button color="primary" className={classes.button} onClick={() => Router.push("/user-list")}>
                        <ListIcon className={classes.rightIcon} />
                            List
                      </Button>
                      <Button color="primary" className={classes.button}>
                        <DeleteIcon className={classes.rightIcon} />
                          Delete
                      </Button>
                    </div>
                  }
                  title="Edit User"
                />
                <form>
                  <Grid container className={classes.grid}>
                    <Grid item lg={4} md= {4} xs={12} sm={12}>
                      <TextField
                        id="standard-name"
                        label="Name"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange("name")}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container className={classes.grid}>
                    <Grid item lg={4} md= {4} xs={12} sm={12}>
                      <TextField
                        id="standard-name"
                        label="Name"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange("name")}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                      aria-label="uploadMode"
                      name="upload"
                      className={classes.group}
                      // value={this.state.value}
                      // onChange={this.setUploadMode}
                    >
                      <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                      <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                    </RadioGroup>
                  </FormControl>
                  <div>
                    <Button variant="contained" color="primary" className={classes.button}>
                      <SaveIcon className={classes.rightIcon} />
                          Save
                    </Button>
                  </div>
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}


EditUser.propTypes = {
  classes: PropTypes.object,
  query: PropTypes.object
};

export default withStyles(styles)(EditUser);
