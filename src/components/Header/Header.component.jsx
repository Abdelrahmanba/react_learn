import React from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./header.styles.scss"
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../Cart-Icon/CartIcon.component";

import {connect} from "react-redux";
import CartDropDown from "../Cart-Dropdown/CartDropDown";


const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo" to="./">
            <Logo/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                Shop
            </Link>
            {currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                :
                <Link to="/SignIn" className="option">Sign In</Link>}
            <CartIcon />
        </div>
        {hidden?
            null:
            <CartDropDown/>
        }
    </div>
)
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
        currentUser,
        hidden
    }
)


export default connect(mapStateToProps)(Header);
