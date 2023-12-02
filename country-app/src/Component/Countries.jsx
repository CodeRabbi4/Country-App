import React from 'react'

import {v4 as uuid} from "uuid"
import Country from './Country'

const Countries = (props) => {
   
  return (
    <section className='row justify-content-between g-5 mt-5'>
      {props.countries.map((country)=>{
        const newCountry = {country, id:uuid(),  }
        return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry}  />
      })}
    </section>
  )
}

export default Countries
