import Image from "next/image";
import { useState,useContext } from "react";
import { Button, Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import column1 from './../../../Assets/theme_1/images/column1.jpg'
import column2 from './../../../Assets/theme_1/images/column2.jpg'
import column3 from './../../../Assets/theme_1/images/column3.jpg'
import column4 from './../../../Assets/theme_1/images/column4.jpg'
import Context from "../../Context";



const Delivary = () => {
    const [show, setShow] = useState(false);
    const [grid, setGrid] = useState(4);
    const [gridClass, setGridClass] = useState(3);
    const editActive = useContext(Context);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style_title = { border: '1px solid #000' }


    return (

        <section className="Delivary">
            <Modal
                size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Grid</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className="d_flex">
                        <Col xs={3} lg={3}>
                            <Image src={column1} onClick={()=>{setGrid(1);setGridClass(12)}} className='logo img-fluid' style={grid === 1? style_title:'' } />
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image src={column2} onClick={()=>{setGrid(2);setGridClass(6)}} className='logo img-fluid' style={grid === 2? style_title:'' } />
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image src={column3} onClick={()=>{setGrid(3);setGridClass(4)}} className='logo img-fluid' style={grid === 3? style_title:'' } />
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image src={column4} onClick={()=>{setGrid(4);setGridClass(3)}} className='logo img-fluid' style={grid === 4? style_title:'' } />
                        </Col></Row>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            <Container>
            {editActive === true &&<span style={{ marginLeft: '4px', cursor: 'pointer', float: 'right' }} onClick={handleShow} >
                    <svg
                        fill="#000"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 306.637 306.637"
                        xmlSpace="preserve"
                    >
                        <path d="M12.809 238.52L0 306.637l68.118-12.809 184.277-184.277-55.309-55.309L12.809 238.52zm47.981 41.423l-41.992 7.896 7.896-41.992L197.086 75.455l34.096 34.096L60.79 279.943zM251.329 0l-41.507 41.507 55.308 55.308 41.507-41.507L251.329 0zm-20.294 41.507l20.294-20.294 34.095 34.095-20.294 20.294-34.095-34.095z" />
                    </svg>
                </span>}
                <Row className="d_flex">

                    {/* item */}
                    <Col xs={6} lg={gridClass}>

                        <div className="DelivaryItem d_flex">

                            <div className="img">
                                <img src="/theme_1/images//delivery-truck.png" alt="" />
                            </div>

                            <div className="text">
                                <h4>Free Delivery</h4>
                                <p>For all oders over $99</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={6} lg={gridClass}>

                        <div className="DelivaryItem d_flex">

                            <div className="img">
                                <img src="/theme_1/images//return-on-investment.png" alt="" />
                            </div>

                            <div className="text">
                                <h4>90 Days Return</h4>
                                <p>If goods have problems</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={6} lg={gridClass}>

                        <div className="DelivaryItem d_flex">

                            <div className="img">
                                <img src="/theme_1/images//secure-payment.png" alt="" />
                            </div>

                            <div className="text">
                                <h4>Secure Payment</h4>
                                <p>100% secure payment</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={6} lg={gridClass}>

                        <div className="DelivaryItem d_flex">

                            <div className="img">
                                <img src="/theme_1/images//24-7.png" alt="" />
                            </div>

                            <div className="text">
                                <h4>24/7 Support</h4>
                                <p>Dedicated support</p>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default Delivary;
