import React from 'react'
import Country from './country'
import {v4 as uuid} from "uuid";

const Countries = (props) => {
  return (
    <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 justify-center md:justify-between mt-28 gap-x-10 gap-y-20'>
     {props.countries.map((country)=>{
        const newCountry = {country, id:uuid() }
        return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry} />
     })} 
    </section>
  )
}

export default Countries;
