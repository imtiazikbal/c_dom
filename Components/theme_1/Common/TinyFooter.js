import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { currentYear } from "../../../utils/getCurrentYear";
const TinyFooter = ({domainInfo}) => {
    return (
        <section className="TinyFooter">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} lg={6}>
                        <div className="TinyFooterItem">
                            <p>© {currentYear} {domainInfo?.name}. All Rights Reserved <br /> System developed by <Link href="https://funnelliner.com/">Funnel Liner</Link> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TinyFooter;
