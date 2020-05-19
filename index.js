import React from "react";
import { render } from "react-dom";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      name: "React",
      form: {
        dialog: {}
      }
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Router>
            <div>
              <Route exact path="/" component={ListPage} />
              <Route path="/about" component={DetailPage} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
