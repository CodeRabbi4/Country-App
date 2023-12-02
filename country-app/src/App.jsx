import { useState, useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './Component/Countries';
import Search from './Component/Search';

const url = "https://restcountries.com/v3.1/all";
function App() {

  const [countries, setCountries] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error , setError] = useState(null);
  const [filterCountry, setFilterCountry] = useState([])

  const dataFetch = async (url)=>{
    setisLoading(true)
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountry(data)
      setisLoading(false);
      setError(null)
    }catch(error){
      setError(error)
      setisLoading(false)

    }

  };

  useEffect(()=>{
    dataFetch(url)
  },[])

  const loadingMessage = <p className='text-center mt-5 fw-medium'>Loading 
  <span className="spinner-grow" role="status"></span></p>

  // const handleRemoveCountry =(name)=>{
  //   const filterCountry = countries.filter((country)=> 
  //   country.name.common !== name )
  //   setCountries(filterCountry)
  // }

  const handleRemoveCountry =(name)=>{
    const filter = filterCountry.filter((country)=>
    country.name.common !== name
    )
    setFilterCountry(filter)
  };

  const handleSearceValue =(searchValue)=>{
    const value = searchValue.toLowerCase()
    const newCountry = countries.filter((country)=>{
      const newcountryName= country.name.common.toLowerCase();
      return newcountryName.startsWith(value)
    });
    setFilterCountry(newCountry)
  }


  return (
    <main className='container'>
    <h1 className='text-center fw-bold my-4 fs-1 text-uppercase'>Country App</h1>
    <Search onSearch={handleSearceValue} />
     {isLoading && loadingMessage}
     {error && <h1>{error.message}</h1>}
    {countries && <Countries countries={filterCountry} onRemoveCountry={handleRemoveCountry} />}
    </main>
  )
}

export default App
