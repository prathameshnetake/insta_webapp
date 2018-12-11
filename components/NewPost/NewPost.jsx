import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {addNewPost} from "../../reducers/posts/action";

const styles = () => ({
  wrapper: {
    padding: "1rem",
    margin: "2rem 0",
    position: "absolute",
    top: "6rem",
    right: "1rem"
  },
  fab: {
  },
  input: {
    display: "none"
  },
  root: {}
});

class NewPost extends React.Component {
  handleInputFileChange = evt => {
    console.log(evt.target.files);
    const data = new FormData();
    data.append("file", evt.target.files[0]);
    data.append("user", this.props.user.username);
    this.props.dispatch(addNewPost(data, res => {
      console.log(res);
    }));
  }

  render() {
    const {classes} = this.props;
    console.log(this.props.user);
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            onChange={this.handleInputFileChange}
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Fab color="primary" aria-label="Add" className={classes.fab} component="span">
              <AddIcon />
            </Fab>
          </label>

        </div>
      </React.Fragment>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object,
  extraClass: PropTypes.string,
  user: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(NewPost));
