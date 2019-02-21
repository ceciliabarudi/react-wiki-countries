'Use strict';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from '../data/countries.json';

class CountryDetails extends Component {
  render() {
    const country = countries.find(oneCountry => {
      return oneCountry.cca3.includes(this.props.match.params.id)
    })
    return (
      <div className="pls-move-right">
        <h1> {country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <p>Borders:</p>
          <ul>
            {country.borders.map((countryCode) => {
              return <li key={countryCode}><Link to={`/${country.cca3}`}>{countryCode}</Link></li>
            })}
          </ul>
      </div>
    );
  }
}

export default CountryDetails;