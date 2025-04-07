import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { ImageLoader, imagesSize } from "../../../utils/imageLoader";
import Image from "next/image";
import noBanner from "../../../public/theme_1/images/banner/NoAdBanner.png"
const MiddleBanner = ({ domainInfo }) => {
  const removeHash = (value) => {
    let validLink = '';
    if(value.charAt(0) === "#"){
      validLink = value.substring(1);
    }else{
      validLink = value
    }
    return validLink;
  }
  return (
    <section>
      <Container>
        <Row>
          
          {domainInfo?.banner !== null &&
            domainInfo?.banner?.length > 0 &&
            domainInfo?.banner.map((item, index) => (
              <Col key={index} lg={4}>
                <div className="Multipage__1__CardDiv">
                  <div className="Multipage__1__CardAbs">
                    <Link href={item?.link ? removeHash(item?.link) : "#"}
                    >
                      <img  src={ImageLoader(item?.image, imagesSize?.bannerWidth, imagesSize?.bannerHeight)} alt=""  />
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          {domainInfo?.banner === null ||
            (domainInfo?.banner?.length === 0 && (
              <>
                <Col lg={4}>
                  <div className="Multipage__1__CardDiv">
                    <div className="Multipage__1__CardAbs">
                    <Image src={noBanner} alt="no banner" />
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="Multipage__1__CardDiv">
                    <div className="Multipage__1__CardAbs">
                    <Image src={noBanner} alt="no banner" />
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="Multipage__1__CardDiv">
                    <div className="Multipage__1__CardAbs">
                      <Image src={noBanner} alt="no banner" />
                    </div>
                  </div>
                </Col>
              </>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default MiddleBanner;
