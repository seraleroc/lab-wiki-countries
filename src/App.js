import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import CountriesDB from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import HomePage from './Pages/HomePage';
import CountryDetails from './components/CountryDetails';



function App() {
  const [countries, setCountries] = useState(CountriesDB)


  return (
    <div className="App">
    <NavBar />

    <div className='content'>
      <CountriesList countries={countries}/>

    <Routes>        
        <Route path='/' element={<HomePage />}></Route>

        <Route 
          path='/:countriesAlpha3Code' 
          element={<CountryDetails 
                    className = 'Main'
                    countries={countries} 
                    setCountries={setCountries}
                    />}/>
    </Routes>
    </div>

    </div>
  );
} 

export default App;
