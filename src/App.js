import React, { Component } from "react";
import "./App.css";
import countries from "./data/countries.json";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

const countryList = countries.map(country => {
  return (
    <li key={country.cca3}>
      <Link to={`/${country.cca3}`}>{country.name.common}</Link>
    </li>
  );
});

const navStyle = {
  paddingTop: "30px",
  paddingLeft: "30px",
  marginTop: "10px",
  marginLeft: "30px",
  width: "95%",
  height: "50px",
  backgroundColor: "#418ff4",
  color: "white",
  textAlign: "left",
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "1.5rem"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav style={navStyle}>WikiCountries</nav>
        <Router>
          <div>
            <div className="container keepsthingsorderly">
              <aside className="pls-move-left">
                <ul className="pls-move-left">{countryList}</ul>
              </aside>
              <main>
                <Switch>
                  <Route path={"/:id"} component={CountryDetails} />
                </Switch>
              </main>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
