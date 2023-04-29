import React from 'react'

const Movie = ({year,title,img}) => {
  return (
    <div className='movie text-center w-[100%] max-w-[250px]  text-2xl bg-slate-300 border-[3px] border-gary font-bold p-2 m-1'>
      <img src={img} className="w-[100%]  mx-h-[250px]  " alt="" />
      <p>{title}</p>
      <p >{year}</p>
      
    </div>
  )
}

export default Movie
