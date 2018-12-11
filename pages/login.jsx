import React from "react";
import LoginForm from "../containers/Login/Login.jsx";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const data = {
      data: {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value
      }
    };
    console.log(data);
  }
  render() {
    return (
      <React.Fragment>
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default Login;
