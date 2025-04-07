import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// Css
import style from './socia-media.module.css';
const SocialMedia = ({ fb, twitter, linkedin,instagram, youtube, footer_text_color }) => {
    // const { fb, instagram, youtube, twitter } = domainInfo;
    return (
        <div className='SocialMedia' id="SocialMedia">
            <div className={style.SocialMediaContent} id="SocialMediaContent">
                <Link href={fb ? fb :"https://www.facebook.com/"} target="_blank" className={style.FB}> <FaFacebookF/> </Link>
                <Link href={instagram ? instagram :"https://www.instagram.com/"} target="_blank" className={style.INS}> <FaInstagram/> </Link>
                <Link href={youtube ? youtube :"https://www.youtube.com/"} target="_blank" className={style.YT}> <FaYoutube/> </Link>
                <Link href={twitter ? twitter :"https://twitter.com/"} target="_blank" className={style.TW}> <FaTwitter/> </Link>
            </div>
        </div>
    )
}

export default SocialMedia
