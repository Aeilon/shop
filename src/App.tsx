import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { theme } from "./constans/theme";
import * as routes from "./constans/routes";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";

const GlobalStyle = createGlobalStyle`
  *{
   font-size: 62.5%;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
  body {
   font-family: "Inter", sans-serif;
  }
  html{
  scroll-behavior: smooth;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <TopBar />
          <NavBar />
          <Switch>
            <Route exact path={routes.HOME} component={Homepage} />
            <Route path={routes.SIGN_UP} component={SignUpPage} />
            <Route path={routes.SIGN_IN} component={SignInPage} />
            <Route path="/category/:category" component={CategoryPage} />
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
