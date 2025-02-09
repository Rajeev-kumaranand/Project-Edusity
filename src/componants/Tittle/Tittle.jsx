import React from 'react'
import './Tittle.css'

function Tittle({tittle,subtittle}) {
  return (
    <div>
      <h2 className='tittle' > {tittle} </h2>
      <h1 className='subtittle' > {subtittle} </h1>
    </div>
  )
}

export default Tittle
