import { Container} from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import TinyFooter from "./TinyFooter";
const Footer = ({ domainInfo }) => {
    return (
        <div>
            <section className="Multipage__1__Delivary">
                <Container>
                    <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>

                    {/* Address */}

                    <div className='Multipage__1__AddressDiv'>

                        <div className="Multipage__1__AddressDivItem ">

                            <div className="Multipage__1__text">
                                <img src={domainInfo?.shop_logo} alt="" />
                            </div>

                            <div className="Multipage__1__text2">
                                <h3>Store Address</h3>
                                <p>{domainInfo?.address}</p>
                            </div>

                            <div className="Multipage__1__text2">
                                <h3>Contact No.</h3>
                                <p>{domainInfo?.phone}</p>

                            </div>

                        </div>

                    </div>


                    <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>


                    <SocialMedia domainInfo={domainInfo} />


                    {/* Tiney Footer */}

                    <div className='Multipage__1__Tiney'>

                        <TinyFooter  domainInfo={domainInfo}/>

                    </div>


                </Container>

            </section>



        </div>
    );
};

export default Footer;
