import React from "react";
import './App.css';
import Header from "./components/Header/Header.component";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import SignInPage from "./Pages/SgininPage/SigninPage.component"
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {auth, creatUserProfile} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckOut from "./Pages/Checkout/CheckOut.component";

class App extends React.Component {

    unsubscribe = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await creatUserProfile(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: userRef.id,
                            ...snapshot.data()
                        }
                    })

                })

            } else {
                setCurrentUser(null)
            }
        })

    }

    componentWillUnmount() {
        this.unsubscribe();

    }

    render() {
        return <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/checkout" component={CheckOut}/>

                <Route path="/shop" component={ShopPage}/>
                <Route exact
                       path="/SignIn"
                       render={() =>
                           (this.props.currentUser ?
                               (
                               <Redirect to="/"/>
                               ) : (
                               <SignInPage/>
                               )
                           )}/>
            </Switch>
        </div>
    }

}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
