


import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newvisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newvisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the countries : {countries.length}</h1>
            <h3> Total visited Country: {visitedCountries.length}</h3>
            <h3> Total visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flag'>
                {
                    visitedFlags.map((flag,index) => <img src={flag} alt="" key={index} />)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country 
                        country={country} 
                        key={country.cca3.cca3} 
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}>

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

