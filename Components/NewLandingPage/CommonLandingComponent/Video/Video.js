import React from 'react';
import dynamic from 'next/dynamic'
// Youtube Player
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
// Css
import style from './video.module.css';

const Video = ({video}) => {

    

    return (


        <div className='VideoPlay'>

            <div className={style.VideoPlayers}>

                <ReactPlayer url={video ? video : 'https://www.youtube.com/watch?v=uFjU5zFJx3E&ab_channel=FunnelLiner'} autoplay={true}  playing={true} controls={true} />

            </div>
        
        </div>
        
    )

}

export default Video
