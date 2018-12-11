import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import {connect} from "react-redux";
import {deleteSingleVideo} from "../../reducers/editCase/actions";

const styles = theme => ({
  // root: {
  //   flexGrow: 1,
  //   maxWidth: 600,
  //   padding: theme.spacing.unit * 2
  // },
  root: {
    overflow: "hidden",
    padding: `35px ${theme.spacing.unit * 3}px`
  },
  wrapper: {
    maxWidth: 400
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    // margin: theme.spacing.unit
  }
});

class VideoList extends React.Component {
  state = {
    caseData: null
  }
  componentWillMount() {
    console.log(this.props);
    this.setState({caseData: this.props.caseData});
  }
  deleteVideoDetail = data => {
    console.log(data);
    console.log(this.state.caseData);
    this.setState({caseData: data.caseData});
    console.log(this.state.caseData);
    this.forceUpdate();
  };

  deleteSingleCaseVideo = id => {
    console.log(id);
    const data = {
      videoId: id,
      id: this.props.caseData._id
    };
    console.log(data);
    this.props.dispatch(deleteSingleVideo(data, this.deleteVideoDetail));
  }

  render() {
    const {classes, caseData} = this.props;
    console.log(caseData);
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {this.state.caseData.videos.map((video, i) => (
            <Paper className={classes.paper} key={i}>
              <Grid container container wrap="nowrap" spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <video className={classes.img} controls src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="title">
                Standard license
                      </Typography>
                      <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                      <Typography color="textSecondary">ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{cursor: "pointer"}}>Remove</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="title" onClick={() => this.deleteSingleCaseVideo(video._id)}><DeleteIcon /></Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))
          }
        </div>
      </div>
    );
  }
}

VideoList.propTypes = {
  classes: PropTypes.object,
  caseData: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default connect()(withStyles(styles)(VideoList));
