import React, { useRef } from 'react'
import './Videoplayer.css'
function Videoplayer({video , setvideo}) {

    const player = useRef(null)

    const closevideo = (e)=>{
        if(e.target === player.current){
            setvideo(false)
        }
    }
    return (
        <div className={`video_player ${video?'':'hide'}`} ref={player} onClick={closevideo} >
            <video className='video' src="https://greatstack.in/assets/college-video-6XtGR-D3.mp4" autoPlay muted controls ></video>
        </div>
    )
}

export default Videoplayer
