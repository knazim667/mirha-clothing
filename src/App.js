import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import SignOut from "./components/signOut/signOut";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";
import { auth } from "./components/firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signIn" component={SignInAndSignUp} />
          <Route path="/signOut" component={SignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
