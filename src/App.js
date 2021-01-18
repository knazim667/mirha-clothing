import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signIn" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
