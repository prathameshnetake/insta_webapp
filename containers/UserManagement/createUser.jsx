import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import swal from "sweetalert2";
import {addNewUser} from "../../reducers/user/action";


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
    margin: "2rem 0"
  },
  edit: {
    marginLeft: "5px"
  },
  group: {
    flexDirection: "row"
  },
  root: {
    padding: "2rem"
  },
  input: {
    margin: "1rem 0",
    "& textarea": {
      paddingTop: "0.5rem",
      height: 150
    }
  }
});

class CreateUSer extends React.Component {
  state = {
    username: "",
    password: "",
    bio: "",
    website: "",
    avatar: "",
    fileSelected: false
  }

  handleSubmit = () => {
    console.log("adding new user");
    if (
      !this.state.username ||
      !this.state.password ||
      !this.state.bio ||
      !this.state.website ||
      !this.state.avatar
    ) {
      swal({
        type: "error",
        title: "Oops...",
        text: "All fields are compulsory"
      });
      return;
    }
    const data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("bio", this.state.bio);
    data.append("website", this.state.website);
    data.append("avatar", this.state.avatar);
    this.props.dispatch(addNewUser(data, res => {
      console.log(res);
      this.gotoLogin();
    }));
  }

  handleTextChange = field => evt => {
    this.setState({[field]: evt.target.value});
  }

  handleFileChange = evt => {
    console.log( evt.target.files[0]);
    this.setState({avatar: evt.target.files[0], fileSelected: true});
  }

  gotoLogin = () => {
    window.location = "/login";
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid item lg={12} md= {12} xs={12} sm={12}>
              <Button variant="outlined" onClick={this.gotoLogin}>already registered? Go to login</Button>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe">
                      <i className="material-icons">
                      person_add
                      </i>
                    </Avatar>
                  }
                  title="Create new User"
                />
                <div className={classes.root}>
                  <form>
                    <Grid container className={classes.grid}>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-username"
                          label="Username"
                          margin="normal"
                          fullWidth
                          required
                          onChange={this.handleTextChange("username")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-password"
                          label="Create your super password"
                          margin="normal"
                          fullWidth
                          type="password"
                          required
                          onChange={this.handleTextChange("password")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="website"
                          label="Your website"
                          margin="normal"
                          fullWidth
                          required
                          onChange={this.handleTextChange("website")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Input
                          fullWidth
                          multiline
                          className={classes.input}
                          placeholder="Add your bio here"
                          onChange={this.handleTextChange("bio")}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          accept="image/*"
                          style={{display: "none"}}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={this.handleFileChange}
                        />
                        <label htmlFor="contained-button-file">
                          <Button variant="contained" component="span" className={classes.button}>
                              Upload Avatar
                          </Button>
                        </label>
                        {this.state.fileSelected ? `  File Selected: ${this.state.avatar.name}` : null}
                      </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                      Register
                    </Button>
                  </form>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}


CreateUSer.propTypes = {
  classes: PropTypes.object,
  userDetails: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(withStyles(styles)(CreateUSer));
