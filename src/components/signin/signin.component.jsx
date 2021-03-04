import React from "react";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = () => {
    console.log("changes");
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="signInDiv">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className="signInForm">
          <FormInput
            handleChange={this.handleChange}
            lable="Email"
            name="email"
            type="email"
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
