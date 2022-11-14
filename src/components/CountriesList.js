import { useState } from 'react'; 
import { Link } from 'react-router-dom';

function CountriesList({countries}) {

    const [search, setSearch] = useState('')

    function handleChange (e) {
        setSearch(e.target.value)
    }

    return (
        <div className="list-countries">
            <input type='text' name='searchCountry' value={search} onChange={handleChange} placeholder='Search country'/>
            {countries
                .filter(country => {
                    return country['name']['common'].includes(search)
                })
                .map(country => {
                    return (
                        <Link 
                        to={`/${country['alpha3Code']}`}
                        key={country['alpha3Code']}>{country['name']['common']}</Link>)
            })}
        </div>
      );
}

export default CountriesList;