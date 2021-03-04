import React from "react";
import SignIn from "./../../components/signin/signin.component";
import SignUp from "./../../components/signup/signup.component";
class SignInPage extends React.Component {
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
      <div className="signInPage">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInPage;
