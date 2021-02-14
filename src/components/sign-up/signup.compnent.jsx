import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../Custom-button/CustomButton.compnent";
import {auth,creatUserProfile} from "../../firebase/firebase.utils";

import "./signUp.styles.scss"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            repeatPassword: ""

        }
    }
    handleSubmit =  async (event) => {
        const {displayName,email,password,repeatPassword} = this.state;
        event.preventDefault();

        if(password!==repeatPassword){
            alert("Password Didn't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await creatUserProfile(user,{displayName});
            this.setState({
                displayName: "",
                email: "",
                password: "",
                repeatPassword: ""

            })
        }
        catch(error){
            console.log(error);
        }
    }

    handleChange = (event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
       const {displayName,email,password,repeatPassword} = this.state;
        return (
            <div className="sign-up">
                <h1>I Don't have an account </h1>
                <span>use email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} label="Display Name"  onChange={this.handleChange}/>
                    <FormInput type="email" name="email" value={email} label="Email" onChange={this.handleChange}/>
                    <FormInput type="password" name="password" value={password} label="Password" onChange={this.handleChange}/>
                    <FormInput type="password" name="repeatPassword" value={repeatPassword} label="Repeat Password" onChange={this.handleChange}/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;