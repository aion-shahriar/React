
import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setvisited] = useState(false);

    const handleVisited = () => {
        setvisited(!visited);
        if(!visited) {
            handleVisitedCountries(country);
        }
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3> Name: {country.name.common}</h3>
            <p> Population: {country.population?.population}</p>
            <p> Capital: {country.capital?.capital}</p>
            <p> Area: {country.area?.area}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => handleVisitedFlag(country?.flags?.flags?.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;



/*
1. inline css
2. 


*/