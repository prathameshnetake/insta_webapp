import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import gray from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/Button/Button.jsx";
import DefaultButton from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    // margin: `${theme.spacing.unit * 2}px 0`,
    padding: theme.spacing.unit * 2,
    backgroundColor: gray[100],
    height: "100%"
  },
  grid: {
    backgroundColor: gray[100],
    margin: `${theme.spacing.unit * 4}px 0`
  },
  loginButton: {
    margin: theme.spacing.unit * 2
  },
  form: {
    margin: `${theme.spacing.unit * 2}px 0`,
    padding: theme.spacing.unit * 2

  },
  card: {
    position: "relative",
    display: "block",
    maxWidth: "350px",
    width: "100%"

  },
  button: {
    // display: "block",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ED2553",
    border: "1px solid white",
    position: "absolute",
    top: "30px",
    right: "-50px",
    cursor: "pointer",
    zIndex: "100",
    transform: "translate(0%, 0%)"
  },
  login: {
    marginTop: "60px",
    width: "100%",
    float: "left",
    lineHeight: "46px",
    fontSize: "34px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#ED2553",
    borderLeft: "4px solid #ED2553",
    position: "relative"
  },
  container: {
    width: "100%",
    maxWidth: "460px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  loginBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
    float: "left",
    transform: "scale(1)",
    zIndex: 5,
    top: 0,
    padding: "60px 50px 40px 50px",
    opacity: 1
  },
  title: {
    zIndex: "1",
    borderLeft: "5px solid #ec2652",
    margin: "0 0 3px -50px",
    padding: "10px 0 10px 50px",
    color: "#ec2652",
    fontSize: "32px",
    fontWeight: 600,
    textTransform: "uppercase"
  },
  loginBoxBack: {
    backgroundColor: gray[50],
    height: "10px",
    padding: 0,
    margin: "0 10px",
    borderRadius: "5px 5px 0 0"
  },
  buttonWrapper: {
    margin: `${theme.spacing.unit * 2}px 0`,
    display: "grid"
  }
});

class LoginForm extends React.Component {
  gotoRegsiter = () => {
    window.location = "/register";
  }

  render = () => {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.paper}>
          <Grid container justify="center" alignItems="center" className={classes.grid}>
            <Grid item lg={3} md={3} xs={10} sm={10}>
              <div className={classes.loginBoxBack} />
              <div className={classes.loginBox}>
                <div className={classes.title}>
                  LOGIN
                </div>
                <div className={classes.overBox}>
                  <div className={classes.button}>
                    <i className="material-icons" style={{fontSize: "48px", color: "white", margin: "24px 0 0 23px"}}>
                      create
                    </i>
                  </div>
                </div>
                <form action="/login" method="POST">
                  <Grid>
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                      <TextField
                        id="username"
                        label="Username"
                        name="username"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                      <TextField
                        id="password"
                        name="password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                        type="password"
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.buttonWrapper}>
                    <Button label="login" type="submit"/>
                  </div>
                  <DefaultButton
                    variant="outlined"
                    style={{float: "right"}}
                    onClick={this.gotoRegsiter}
                  >
                    register
                  </DefaultButton>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LoginForm);
