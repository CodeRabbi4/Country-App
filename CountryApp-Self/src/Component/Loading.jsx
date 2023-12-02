import React from 'react'

const Loading = () => {
  return (
    <section className='flex items-center justify-center h-screen w-full'>
        <div className='flex justify-center items-center space-x-3 -mt-20'>
            <h1 className='text-6xl font-bold'>Loading</h1>
            <img src="loading.png" alt="Loading...."  className='animate-spin w-16'/>
        </div>      
    </section>
  )
}

export default Loading
