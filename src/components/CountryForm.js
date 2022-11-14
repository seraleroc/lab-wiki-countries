import { useState } from 'react';

function CountryForm({selectedCountry}) {

    const [country, setCountry] = useState(selectedCountry)

    const [foreign, setForeign] = useState({
        'repToBrazil' : ''
    })
    const [brazilian, setBrazilian] = useState({
        'repToCountry' : ''
    })

    function handleForeign(e) { 
        setForeign({...foreign, [e.target.name] : e.target.value})

    }

    function handleBrazilian(e) { 
        setBrazilian({...brazilian, [e.target.name] : e.target.value})

    }


    function submitForeign(e) {
        e.preventDefault();

        setCountry({...country, foreign})
    }

    function submitBrazilian(e) {
        e.preventDefault();

        setCountry({...country, brazilian})
    }


    return (
        <>
            <form>
                <input type='text' name='repToBrazil' value= {foreign['repToBrazil']} placeholder='Country representative' onChange={handleForeign}/>
                <button onClick={submitForeign}>Update</button>
            </form>


            <form>
                <input type='text' name='repToCountry' value={brazilian['repToCountry']} placeholder='Brazilian representative' onChange={handleBrazilian}/>
                <button onClick={submitBrazilian}>Update</button>
            </form>

         </>
    )
}

export default CountryForm