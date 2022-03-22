import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {SectionTitle} from '../title/Title';

export const Skills = ({title}) => {
  return (
    <section id='skills'>
        <Container>
            <Row>
            <Col>
                <SectionTitle title="Skills"/>
            </Col>
                
            </Row>
            
            <Row>
                <Col>
                <div className="skill-list mb-5">
                <span className='text-info'>
                <i class="fab fa-react"></i>REACT-JS
                </span>
                <span className='text-primary'>
                    <i className="fab fa-html5"></i>HTML 5
                </span>
                <span className='text-danger'>
                    <i className="fab fa-css3-alt"></i>CSS 3
                </span>
                <span className='text-warning'>
                    <i className="fab fa-js-square"></i>Javascript
                </span>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
