import React from "react";
import CountryList from "./CountryList";

const Favcountry = ({selectedCountry, addFavouriteCountry}) => {

    // const onFavOnClick = function(country){
    //     selectedCountry(country);
    // }
    const handleFavSubmit =(event) => {
        event.preventDefault()
        addFavouriteCountry(selectedCountry)

    }
    // onButtonSubmit({
    //     country:favToSubmit
    // });

    return (
        <div>
        <li>
           Country Name: {selectedCountry.name}
           <li>Country Population : {selectedCountry.population}</li>
            {/* {country.borders} */}
            <img src={selectedCountry.flag} alt="oops"/> 
        </li>
       

        </div>
    )
}


export default Favcountry;