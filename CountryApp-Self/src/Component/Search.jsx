import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [search, setSearch]= useState("");

    const handleSearch =(e)=>{
      setSearch(e.target.value);
        
    };

    useEffect(()=>{
        props.onSearch(search) 
    },[search])

  return (
    <div>
      <input type="text" placeholder='Search Country' name='search' value={search} onChange={handleSearch} className='border outline-none mx-auto md:w-[400px] xl:w-[450px] w-10/12 mt-10 block p-2 rounded-md focus:shadow-md border-cyan-500 focus:shadow-cyan-400/30' />
    </div>
  )
}

export default Search;
