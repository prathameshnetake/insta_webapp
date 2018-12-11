import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import UserMeta from "../components/UserMeta/UserMeta.jsx";
import UserPosts from "../components/UserPosts/UserPosts";
import {getUserPosts} from "../reducers/posts/action";
import {setUser} from "../reducers/user/action";
import Navbar from "../components/Navbar/Navbar.jsx";
import NewPost from "../components/NewPost/NewPost.jsx";
import Button from "@material-ui/core/Button";

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
            <Button
              variant="contained"
              color="primary"
              style={{margin: "1rem"}}
              onClick={() => (window.location = "/")}
            >
              Show all posts
            </Button>
            <NewPost />
          </div>
          <UserPosts />
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
