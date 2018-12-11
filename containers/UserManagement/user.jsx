import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Router from "next/router";
import Link from "next/link";
import {URL} from "url";
import {editUserData} from "../../reducers/userManagement/action";

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
    margin: theme.spacing.unit
  },
  edit: {
    marginLeft: "5px"
  }
});

class AddUser extends React.Component {
  state = {
    createUser: false,
    rows: [
      {
        name: "xyz",
        id: "1",
        privilege: "normal",
        date: "11/02/2018"
      },
      {
        name: "abc",
        id: "2",
        privilege: "normal",
        date: "11/02/2018"
      },
      {
        name: "mno",
        id: "3",
        privilege: "normal",
        date: "11/02/2018"
      }
    ]
  }

  componentWillMount = () => {
    console.log("==================");
    this.props.editUserData(this.state);
  }

  handleEditUserClick = userData => {
    console.log(userData);
    Router.push({
      pathname: "/create-user",
      query: {id: userData}
    });
  }

  handleCreateUserlick = () => {
    this.setState({createUser: true});
  };
  render () {
    console.log(this.state.createUser);
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.wrapper}>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid item lg={12} md= {12} xs={12} sm={12}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe">
                      <i className="material-icons">
                      people
                      </i>
                    </Avatar>
                  }
                  action={
                    <div>
                      <Button color="primary" className={classes.button} onClick={() => Router.push("/create-user")}>
                        <AddIcon className={classes.rightIcon} />
                            Create
                      </Button>
                      <Button color="primary" className={classes.button}>
                        <RefreshIcon className={classes.rightIcon} />
                          Refresh
                      </Button>
                    </div>
                  }
                  title="All Users"
                />
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Privilege</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.rows.map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.privilege}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>
                            <Link href={{pathname: "create-user", query: {id: row.id}}}><a>About</a></Link>
                            {/* <Button color="primary" size="small" className={classes.button} onClick={() => this.handleEditUserClick(row.id)}>
                              <EditIcon />
                                Edit
                            </Button> */}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>

    );
  }
}

AddUser.propTypes = {
  classes: PropTypes.object,
  editUserData: PropTypes.func

};
const mapDispatchToProps = dispatch => ({
  editUserData: rule => dispatch(editUserData(rule))
});

const mapStateToProps = state => ({
  userDetails: state.row
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddUser));
