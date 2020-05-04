import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Acumulation from './Acumulation'

export default function Dashboard () {

    return(
        <Container>
            <Row>
                <Col>dash</Col>
            </Row>
            <Row>
                <Col>
                    <Acumulation />
                </Col>
            </Row>
        </Container>
    );
}