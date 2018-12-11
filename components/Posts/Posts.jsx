import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {red} from "@material-ui/core/colors";
import swal from "sweetalert2";
import {deletePost, likePost} from "../../reducers/posts/action";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "scroll",
    marginLeft: 50,
    marginBottom: 30,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: "1rem"
    }
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "2rem 0"
  },
  card: {
    borderRadius: 5,
    boxShadow: theme.shadows[2],
    height: 400,
    display: "flex",
    flexDirection: "column"
  },
  header: {
    padding: "1rem 0.5rem"
  },
  footer: {
    padding: "1rem 0.5rem",
    display: "flex",
    alignItems: "center"
  },
  image: {
    "& img": {
      width: "100%",
      height: "100%"
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    flexGrow: 1
  },
  wrapper: {
    overflow: "auto",
    padding: "1rem"
  },
  heading: {
    margin: "0.5rem",
    padding: "1rem"
  }
});

class Posts extends React.Component {
  componentDidMount() {
    console.log(this.props.posts);
  }

  handleDelete = id => () => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        console.log("delete this post", id);
        this.props.dispatch(deletePost(id, () => {
          swal(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        }));
      }
    });
  }

  like = id => () => {
    console.log(id);
    this.props.dispatch(likePost(id, res => {
      console.log(res);
    }));
  }

  render() {
    const {classes, posts} = this.props;
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <Grid container spacing={24}>
            {posts.map(post =>
              // const duratiom = moment(blog.timestamp).fromNow();
              (
                <Grid item xs={12} sm={6} lg={3} key={post._id}>
                  <div className={classes.card}>
                    <div className={classes.header}>
                      <Typography style={{fontWeight: "bold"}}>{post.user}</Typography>
                    </div>
                    <div className={classes.image} style={{backgroundImage: `url(${post.imagePath})`}}/>
                    <div className={classes.footer}>
                      <div style={{cursor: "pointer"}}>
                        {post.likes.indexOf(this.props.user.username) !== -1 ?
                          <div style={{cursor: "pointer"}} onClick={this.like(post._id)}>
                            <FontAwesomeIcon icon={faHeart} style={{color: red[500]}}/>
                          </div> : <div style={{cursor: "pointer"}} onClick={this.like(post._id)}>
                            <FontAwesomeIcon icon={faHeart} style={{color: red[100]}}/>
                          </div>
                        }
                      </div>
                      <Typography component="span" style={{marginLeft: "1rem"}}>{post.likes.length} likes</Typography>
                    </div>
                  </div>
                </Grid>
              )
            )}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object,
  extraClass: PropTypes.string,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Posts));
