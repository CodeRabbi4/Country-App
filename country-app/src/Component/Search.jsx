import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [search, setSearch] = useState("")

    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
        props.onSearch(search)
    },[search])

  return (
    <div>
      <input type="text" name="search" placeholder='Search Country' className='form-control shadow-none w-50 mx-auto p-2' value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search
