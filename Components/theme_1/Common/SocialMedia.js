import Link from "next/link";
import { SocialMediaCommon } from "./Menubar";
const SocialMedia = ({ domainInfo }) => {
    const { fb, instagram, youtube, twitter } = domainInfo;
    const colorFromAPI = domainInfo?.multipage_color;
    return (
        <div className='Multipage__1__SocialMedia'>
            <Link href={`/privacy`}>
                Privacy Policy
            </Link>
            <Link href={`/terms`}>
                Terms and Conditions
            </Link>
            <br /><br />
            <h2>Join Us On Social Media</h2>
            <div className='Multipage__1__SocialMediaLinkDiv'>
                <SocialMediaCommon fb={fb} instagram={instagram} youtube={youtube} twitter={twitter} colorFromAPI={colorFromAPI} />
            </div>
        </div>
    );
};

export default SocialMedia;
