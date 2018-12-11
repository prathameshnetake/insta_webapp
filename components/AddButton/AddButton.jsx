import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  root: {
    background: "white",
    borderRadius: 24,
    border: 0,
    color: "#3c4043",
    height: 48,
    padding: "0 15px",
    boxShadow: "0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)",
    "&:hover": {
      background: "#f8f9fa",
      boxShadow: "0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)"
    }
  },
  label: {
    textTransform: "capitalize"
  },
  image: {
    borderRadius: "50%",
    borderWidth: "0",
    background: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E')",
    display: "block",
    margin: "0 15px 0 0",
    position: "relative",
    height: "36px",
    width: "36px",
    WebkitBoxShadow: "none",
    boxShadow: "none"
  }
});

class AddButton extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Button classes={{
        root: classes.root,
        label: classes.label
      }} onClick={this.props.onClick || null}>
        <span className={classes.image}/>
        {this.props.label}
      </Button>
    );
  }
}

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object,
  extraClass: PropTypes.string
};

export default withStyles(styles)(AddButton);
