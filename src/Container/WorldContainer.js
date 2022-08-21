import React, { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import Country from "../Components/Country";
import CountrySelector from "../Components/CountrySelector";

const WorldContainer= () => {
    const [countries, setCountries] = useState ([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favCountry, setFavCountry] = useState ([])

    useEffect(() => {
        getCountries ();
    }, [])

 

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countryLog => processData(countryLog));
    }

    const processData = (data) => {
       const countryLog = data.map( (country) => {
            return{
                name: country.name.common,
                population: country.population,
                // borders: country.borders,
                flag: country.flags.png

            }
        })
        setCountries(countryLog)
    };

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    const addFavouriteCountry = (country) => {
        if (favCountry.includes(country)){
            return
        }
        const newListCountry = [...favCountry, country];
        setFavCountry(newListCountry)



    }


    return (
        <div>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <Country selectedCountry={selectedCountry} addFavouriteCountry={addFavouriteCountry} /> : null}
            <CountryList favCountry={favCountry}/>
        </div>
    )
}



export default WorldContainer;