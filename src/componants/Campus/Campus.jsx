import React from 'react'
import './Campus.css'
import Gallery_1 from '../../assets/gallery-1.png'
import Gallery_2 from '../../assets/gallery-2.png'
import Gallery_3 from '../../assets/gallery-3.png'
import Gallery_4 from '../../assets/gallery-4.png'
import White_arrow from '../../assets/White-arrow.png'

function Campus() {
  return (
    <div className='campus flex justify-center items-center flex-col ' >
      <div className='gallery' >
        <img className='gallery_img' src={Gallery_1} alt="" />
        <img className='gallery_img' src={Gallery_2} alt="" />
        <img className='gallery_img' src={Gallery_3} alt="" />
        <img className='gallery_img' src={Gallery_4} alt="" />
      </div>
      <div>
        <button className=" campus_btn flex " >See more here <img className='w-4 self-center  ml-2' src={White_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Campus
