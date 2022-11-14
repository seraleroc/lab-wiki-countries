import { useParams } from 'react-router-dom'
import { useState } from 'react';
import CountryForm from './CountryForm';
import BorderList from './BorderList';

function CountryDetails({countries, setCountries}) {

    const { countriesAlpha3Code } = useParams();

    const selectedCountry = countries.find((country) => {
        return country['alpha3Code'] === countriesAlpha3Code})

    const [formBtn, setFormBtn] = useState(false)

    function showForm() {
        setFormBtn((formBtn) ? false : true)
    }


    return ( 
        <div className='details'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry['alpha2Code'].toLowerCase()}.png`} alt='flag'/>
            <h3>{selectedCountry['name']['common']}</h3>
            <p>Capital: {selectedCountry['capital']}</p>
            <p>Continent: {selectedCountry['region']}</p>
            <p>Sub-region: {selectedCountry['subregion']}</p>
            <div>Borders: <BorderList selectedCountry={selectedCountry} countries={countries}/></div>


            <p className='lang'>{'Language(s)'}: {Object.keys(selectedCountry['languages']).map(lang => {
                return (<span key={lang}>{selectedCountry['languages'][lang]}</span>)})}</p>

            <p>Represented by Ambassador</p>
            <p>Brazil is represented by Ambassador </p>

            {formBtn ? (<button onClick={showForm}> ^ Hide Form </button>) : (<button onClick={showForm}> Show Update Form ˅</button>)}
            {formBtn ? (<CountryForm selectedCountry = {selectedCountry}/>) : (<></>)}
        </div>
     );
}

export default CountryDetails;