import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {getPostCount} from "../../reducers/posts/action";

const styles = () => ({
  wrapper: {
    padding: "1rem",
    margin: "2rem 0",
    display: "flex"
  },
  root: {},
  image: {
    margin: "1rem 2rem",
    height: 150,
    width: 150,
    borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%"
    }
  },
  data: {
    padding: "1rem"
  }
});

class UserMeta extends React.Component {
  state = {
    count: 0
  }

  getUserPosts() {
    if (this.props.user.username !== "loading...") {
      this.props.dispatch(getPostCount(this.props.user.username, count => {
        this.setState({count});
      }));
    }
  }

  render() {
    const {classes, user, userPosts} = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <div className={classes.image}>
            <img src={user.avatarPath}/>
          </div>
          <div className={classes.data}>
            <Typography variant="h4" style={{fontWeight: "bold"}}>
              {user.username}
            </Typography>
            <div className={classes.bio}>
              <Typography>
                {user.bio}
              </Typography>
            </div>
            <div className={classes.website}>
              <a href={user.website} target="_blank">
                <Typography>
                  {user.website}
                </Typography>
              </a>
            </div>
            <div className={classes.stats}>
              <Typography><b>{userPosts.length}</b> Posts</Typography>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UserMeta.propTypes = {
  classes: PropTypes.object,
  extraClass: PropTypes.string,
  user: PropTypes.object,
  dispatch: PropTypes.func,
  userPosts: PropTypes.array
};

const mapStateToProps = state => ({
  user: state.user,
  userPosts: state.userPosts
});

export default connect(mapStateToProps)(withStyles(styles)(UserMeta));
