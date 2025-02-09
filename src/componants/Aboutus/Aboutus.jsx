import React from 'react'
import './Aboutus.css'
import About from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'
function Aboutus({setvideo}) {
  return (
    <div className=' about_main flex' >
        <div className="about_left">
            <img className='about_img' src={About} alt="" />
            <img className="play_icon" src={Play_icon} alt="" onClick={()=>{setvideo(true)}} />

        </div>
        <div className="about_right">
            <h3>ABOUT UNIVERSITY</h3>
            <h1>Nurturing Tomorrow's Leaders Today</h1>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default Aboutus
