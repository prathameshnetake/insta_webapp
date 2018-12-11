import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import UserMeta from "../components/UserMeta/UserMeta.jsx";
import Posts from "../components/Posts/Posts.jsx";
import {getAllPost, getUserPosts} from "../reducers/posts/action";
import {setUser} from "../reducers/user/action";
import Navbar from "../components/Navbar/Navbar.jsx";
import NewPost from "../components/NewPost/NewPost.jsx";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  wrapper: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    position: "relative"
  },
  box: {
    // display: "flex"
  }
});

class Index extends React.Component {
  static getInitialProps = async ({req}) => {
    if (req) {
      return {user: req.user};
    }
    return {};
  }

  componentDidMount = () => {
    this.props.dispatch(getAllPost());
    this.props.dispatch(getUserPosts(this.props.user.username));
    this.props.dispatch(setUser(this.props.user));
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <Navbar />
          <div className={classes.box}>
            <UserMeta />
            <NewPost />
            <Button
              variant="contained"
              color="primary"
              style={{margin: "1rem"}}
              onClick={() => (window.location = "/home")}
            >
              go to your profile page
            </Button>
            <Typography style={{padding: "1rem"}}>You need this to take actions on the posts you have uploaded</Typography>
          </div>
          <Posts />
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object,
  activeCase: PropTypes.string,
  dispatch: PropTypes.func,
  user: PropTypes.object
};

const mapStatesToProps = () => ({});

export default connect(mapStatesToProps)(withStyles(styles)(Index));
