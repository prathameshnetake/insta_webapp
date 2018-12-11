import React from "react";
import CreateUser from "../containers/UserManagement/createUser.jsx";

class create extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <CreateUser />
      </React.Fragment>
    );
  }
}

export default create;
