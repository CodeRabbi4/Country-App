import React from 'react'

const Country = (props) => {
    const {name, flags, population,capital,area }= props.country;

    const handleRemoveCountry=(name)=>{
     props.onRemoveCountry(name)
    }


  return (
    <article className='col-lg-4 col-sm-6'>
     <div className="card shadow">
     <img src={flags.png} alt={name.common}  className='card-img-top'/>
     <div className="card-body">
      <h3>Name: {name.common}</h3>
      <h4>Population: {population}</h4>
      <h5>Capital: {capital}</h5>
      <h5>Area: {area}</h5>
      <button className='btn btn-danger fw-semibold d-block mt-3 py-2 px-3' onClick={()=>{handleRemoveCountry(name.common)}}>Delete Country</button>
     </div>
     </div>
    </article>
  )
}

export default Country;
