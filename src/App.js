import React, { Component } from 'react';
import './App.css';
import countries from './data/countries.json';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CountryDetails from './components/CountryDetails'

const countryList = countries.map( (country) => {
    return <li key={country.cca3} ><Link to={`/${country.cca3}`}>{country.name.common}</Link></li>
  })

class App extends Component {

  render() {

    return (
      <div className="App">
        <nav>I'm a stupid nav</nav>
        <Router>
          <div>
            <div className="container">
              <aside className="pls-move-left">
                <ul>
                  {countryList}
                </ul>
              </aside>
              <main>
                <Switch>
                  <Route path={'/:name'} component={CountryDetails} />
                  <Route path={'/'}/>
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