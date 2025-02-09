import React, { useRef } from 'react'
import './Testimonials.css'
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'
import Back_icon from '../../assets/back-icon.png'
import Next_icon from '../../assets/next-icon.png'

function Testimonials() {
    const slider = useRef();
    let tx = 0;
    
    const next = ()=>{
        if(tx > -50){
            tx -= 25
            slider.current.style.transform = `translateX(${tx}%)`
        }
    }
    const back = ()=>{
        if(tx < 0){
            tx += 25
            slider.current.style.transform = `translateX(${tx}%)`
        }
    }

    return (
        <div className='container_main' >
            <div className='container' >
                <img className='back_icon bn_icon ' onClick={back} src={Back_icon} alt="" />
                <img className='next_icon bn_icon ' onClick={next} src={Next_icon} alt="" />
                <ul ref={slider} >
                    <li className='testimonial' >
                        <div className="uppor_test">
                            <div>
                                <img className="test_img" src={User_1} alt="" />
                            </div>
                            <div className="heading_test">
                                <p>Emily Williams1</p>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <div className="bottom_test">
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </div>
                    </li>
                    <li className='testimonial' >
                        <div className="uppor_test">
                            <div>
                                <img className="test_img" src={User_2} alt="" />
                            </div>
                            <div className="heading_test">
                                <p>Emily Williams2</p>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <div className="bottom_test">
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </div>
                    </li>
                    <li className='testimonial' >
                        <div className="uppor_test">
                            <div>
                                <img className="test_img" src={User_3} alt="" />
                            </div>
                            <div className="heading_test">
                                <p>Emily Williams3</p>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <div className="bottom_test">
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </div>
                    </li>
                    <li className='testimonial' >
                        <div className="uppor_test">
                            <div>
                                <img className="test_img" src={User_4} alt="" />
                            </div>
                            <div className="heading_test">
                                <p>Emily Williams4</p>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <div className="bottom_test">
                            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
