import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signin">
            <LoginPage />
          </Route>
          <Route exact path="/profile/:profileId">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
