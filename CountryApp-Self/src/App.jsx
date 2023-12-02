import { useEffect, useState } from 'react'
import './App.css'
import Loading from './Component/Loading';
import Countries from './Component/Countries';
import Search from './Component/Search';

const url = 'https://restcountries.com/v3.1/all'
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setisLoading]= useState(true);
  const [error, setError] = useState(null);
  const [filterCountry, setFilterCountry]= useState([])

  const fetchData = async(url)=>{
    try {

      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountry(data);
      setisLoading(false);
      setError(null)      
    } catch (error) {
      setError(error)
      setisLoading(false)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])

const RemoveCountry =(remove)=>{
    const RemoveCountry = countries.filter((country)=>{
        return country.name.common !== remove;
    })
    setFilterCountry(RemoveCountry)
};

const searchChange =(value)=>{
    const values = value.toLowerCase();
    const newCountries = countries.filter((country)=>{
     const foundCountry= country.name.common.toLowerCase();
     return foundCountry.startsWith(values);
     
  })
  setFilterCountry(newCountries)
}

  return (
    <main className='container pb-20'>
      <h1 className='text-4xl text-center my-6 font-bold uppercase'>Country app</h1>
      <Search onSearch={searchChange} />
      {isLoading &&  <Loading/> }
      {error && <h1 className='text-5xl text-center mt-40 font-bold text-red-500'>{error.message}</h1>}

      {countries && <Countries countries={filterCountry} onRemoveCountry={RemoveCountry}/>}

     </main>
  )
}

export default App
