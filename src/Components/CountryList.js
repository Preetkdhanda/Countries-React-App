import React from "react";
import Country from "./Country";
import Favcountry from "./Favcountry"


const CountryList=({favCountry}) => {

    const favCountryItems = favCountry.map((country,index)=>{
        return <Favcountry selectedCountry={country} key = {index}/>
    })

    return(
        <div>
            <ul>
                {favCountryItems}
            </ul>

        </div>


    )

}






export default CountryList;