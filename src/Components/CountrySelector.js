import React from "react";

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    };




    const sortedCountries = countries.sort((countrya,countryb)=>{

        return (countrya.name > countryb.name)? 1 : -1;
    });

    const countryOptions = sortedCountries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

    return(
        <select defaultValue="" onChange = {handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector;