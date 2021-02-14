import React from "react";
import FormInput from "../form-input/FormInput.component"
import CustomButton from "../Custom-button/CustomButton.compnent";
import "./signIn.styles.scss"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        const {email, password} = this.state;
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }

    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email"
                               handleChange={this.handleChange}
                               type="email"
                               name="email"
                               value={this.state.email}
                    />
                    <FormInput label="Password"
                               handleChange={this.handleChange}
                               type="password"
                               name="password"
                               value={this.state.password}
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle}>Sign In With Google</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;