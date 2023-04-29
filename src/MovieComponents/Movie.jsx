import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie text-center w-[100%] max-w-[250px]  text-2xl bg-slate-300 border-[3px] border-gary font-bold p-2 m-1'>
      <img src={props.img} className="w-[100%]  mx-h-[250px]  " alt="" />
      <p>{props.title}</p>
      <p >{props.year}</p>
    </div>
  )
}

export default Movie
