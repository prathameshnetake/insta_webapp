import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({});
function CustomButton(props) {
  const {classes} = props;
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      type={props.type || null}
      className={classes.loginButton}>{props.label}</Button>
  );
}

CustomButton.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};

export default withStyles(styles)(CustomButton);
