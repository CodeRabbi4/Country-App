import React from 'react'

const Country = (props) => {
    const {name, capital, region,area, maps, flags, population}= props.country;

    const handleRemoveCountry =(name)=>{
      props.onRemoveCountry(name)
    }
  return (
    <article>
      <div className='card'>
        <img src={flags.png} alt={name.common} className='flag' />
        <div className='p-4'>
          <h3 className='lg:text-2xl text-xl font-semibold'>Name: {name.common}</h3>
          <h3 className='lg:text-xl text-lg font-medium'>Capital: {capital}</h3>
          <h3 className='lg:text-xl text-lg font-medium'>Region: {region}</h3>
          <h3 className='lg:text-xl text-lg font-medium'>Population: {population}</h3>
          <h3 className='lg:text-xl text-lg font-medium'>Area: {area}</h3>

          <div className='mt-4 xs:flex xs:justify-between xs:items-center flex-col xs:flex-row '>
            <a href={maps.googleMaps} target='blank' className='map-btn'>View Map</a>
            <button className='del-btn' onClick={()=>{handleRemoveCountry(name.common)}}>Delete Country</button>
          </div>
        </div>
      </div>
      </article>


     )}; 
      
      
export default Country;
