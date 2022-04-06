import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.select";

const Header = ({ currentUser, hideCart, cartCount }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div
          className="optiom"
          onClick={() => {
            auth.signOut();
          }}
        >
          Signout
        </div>
      ) : (
        <Link className="option" to="/signin">
          Signin
        </Link>
      )}

      <CartIcon cartCount={cartCount} />
    </div>
    {hideCart ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCart: selectCartHidden,
  cartCount: selectCartItemsCount,
});
export default connect(mapStateToProps)(Header);
