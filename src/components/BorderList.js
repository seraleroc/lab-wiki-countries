import { Link } from 'react-router-dom' 


function BorderList({selectedCountry, countries}) {

    const borderArr = selectedCountry['borders'].map(border => {
        return countries.find(country => {
            return country['alpha3Code'] === border
        })
    })

    console.log(borderArr)
    return (

        <div className="border-countries">
            {borderArr.map((border) => {
                return (
                    <Link 
                    to={`/${border['alpha3Code']}`}
                    key={border['alpha2Code']}>{border['name']['common']}</Link>)
            })}
        </div>
      );
}

export default BorderList;