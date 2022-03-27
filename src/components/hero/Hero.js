import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../Layout/Header';
import './hero.css';
import me from "../../assets/pd.png"

export const Hero = () => {
  return (
    <div className='hero'>
        {/* <Header/> */}
        <Container>

        <Row className='mt-5 pb-3'>
            <Col md="5" className='text-center order-md-2 mb-5'>
                <img src={me} width="40%" alt="" border-radius="50%"/>
            </Col>
            <Col>
          
            <div className="mb-3 pt-3">
                Hi, I am Pradeep Dheke.
            </div>
            <h1>👩‍🚒Full-stack MERN Developer</h1>
                    <p className="mt-5 mb-2">I am passionate student who loves to learn software development.</p>
                    <button className="btn btn-danger">Download Resume <i className="fas fa-cloud-download-alt"></i> 
                    </button>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
