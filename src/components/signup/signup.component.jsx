import React from "react";
import FormInput from "../form-input/form-input.component";
import "./signup.styles.scss";

class SignUp extends React.Component {
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
      <div className="signUpDiv">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="signUpForm">
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

export default SignUp;
