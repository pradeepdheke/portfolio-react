import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {SectionTitle} from '../title/Title';
import imgProfile from '../../assets/pd.png'

export const About = () => {
  return (
    <section id= "about-me">
        <SectionTitle title="About Me"/>
        <Container>
            <Row>
                <Col className='about-me-img'>
                <img src = {imgProfile} alt="me" className='text-center' width="80%"/>
                </Col>
                <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit distinctio reiciendis ad nostrum nulla id dolores maiores. Cupiditate, at?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit distinctio reiciendis ad nostrum nulla id dolores maiores. Cupiditate, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt error non fuga inventore officia! Aliquid non deleniti fugit, praesentium cupiditate molestiae odit aut consequuntur?</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
