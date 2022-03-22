import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { SectionTitle } from '../title/Title';
import proj from "../../assets/ss1.png";

export const Projects = () => {
  return (
    <section id="projects" className='project-section'>
        <Container>
            <Row>
                <Col>
                <SectionTitle title="Projects"/>
                </Col>

            </Row>

            <Row className='py-5'>
                <Col md="6">
                  <img
                  src={proj}
                  alt="project"
                  className='img-thumbnail'
                  width="100%"/>
                </Col>
                <Col md="6">
                  <h2>My Portfolio Website</h2>
                  <div className="links"></div>
                  <p>Tech: HTML, CSS, JavaScript</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium quaerat maxime soluta hic illum!
                  </p>
                </Col>
            </Row>
            <Row className='py-5'>
                <Col md="6" className='order-md-2'>
                  <img
                  src={proj}
                  alt="project"
                  className='img-thumbnail'
                  width="100%"/>
                </Col>

                <Col md="6">
                  <h2>My Portfolio Website</h2>
                  <div className="links"></div>
                  <p>Tech: HTML, CSS, JavaScript</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium quaerat maxime soluta hic illum!
                  </p>
                </Col>
            </Row>
            <Row className='py-5'>
                <Col md="6" className='mt-2, mt-md-0'>
                  <img
                  src={proj}
                  alt="project"
                  className='img-thumbnail'
                  width="100%"/>
                </Col>
                <Col md="6">
                  <h2>My Portfolio Website</h2>
                  <div className="links"></div>
                  <p>Tech: HTML, CSS, JavaScript</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium quaerat maxime soluta hic illum!
                  </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
