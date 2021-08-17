import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import store from "./configureStore";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import history from "./history";
// Components
import InjectLoader from "./components/common/Loader/loader";
import InjectAlert from "./containers/HighOrderComponent/injectAlert";
// Pages
import BuilderList from "./containers/App/builder-project/index";
import Login from "./components/Login/login";
import BillBoard from './containers/App/BillBoard/index';
const App = (props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path="/" component={BuilderList} history={history}/> */}
            <Route exact path="/login" component={Login} history={history}/>
            <Route exact from="/notice-board" render={(props) => <BillBoard {...props} history={history}/>} />
            <Route
              exact
              path="/song-board"
              render={(props) => <BillBoard {...props} history={history}/>}
            />
            <Route
              exact
              path="/bill-board"
              render={(props) => <BillBoard {...props} history={history}/>}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
const withLoader = InjectLoader();
const withAlert = InjectAlert();
//console.log(InjectLoader(),"dscfs")
export default compose(withLoader, withAlert)(App);
//export default App;
