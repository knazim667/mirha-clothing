import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "./navigation.css";

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null,
  //   };
  // }

  // componentDidMount() {
  //   const user = sessionStorage.getItem("user");
  //   this.setState({ user });
  // }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="nav-items">
          <div className="item">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="item">
            <Link to="/contact">Contact</Link>
          </div>
          {currentUser ? (
            <div className="item" onClick={() => auth.signOut()}>
              logout
            </div>
          ) : (
            <div className="item">
              <Link to="/signIn">login</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Navigation);
