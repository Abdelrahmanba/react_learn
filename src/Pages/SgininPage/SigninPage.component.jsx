import React from "react";

import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/sign-up/signup.compnent"
import "./SignInPage.styles.scss";
const SignInPage = ()=> (
    <div className="SignInPage">
        <SignIn />
        <SignUp />
    </div>

)

export default SignInPage;