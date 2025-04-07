import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Css
import style from './menubar.module.css';



const Menubar = (props) => {


  return (


    <>

        <section className="Menubar" id="Menubar">

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className={style.MenubarContent} id="MenubarContent">

                            <div className={style.Logo} id="Logo">
                                <Image src={props.logoImage} />
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
      
    </>

  )
}

export default Menubar
