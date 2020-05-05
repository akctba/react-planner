import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import {usePlanner} from '../context/PlannerContext'
import Acumulation from './Acumulation';

export default function Home () {
    const {plan, addTask, deleteTask, updateTask, getDays} = usePlanner();

    const [task, setTask] = useState({task:'',date:'',id:null,done:false});

    const save = () => {
        //console.log("vai salvar ", task);
        if(task.id) {
            //console.log('existe')
            updateTask(task);
        } else {
            //console.log('nao existe vai incluir')
            addTask(task);
        }
        setTask({task:'',date:'',id:null,done:false});
        //setTask({});
    }

    const cancel = () => {
        setTask({task:'',date:'',id:null,done:false});
    }

    const doneTask = p => {
        let n = {
            ...p,
            done: !p.done
        }
        updateTask(n);
    }

    const change = (e, c) => {
        let nt = {...task};
        nt[c] = e.target.value;
        setTask(nt);
    }

    return(
        <Container fluid>
            <Row>
            <Col lg="6" sm="12">
                    {getDays().map(dt => {
                        return (
                            <div key={dt}>
                                <p>{dt}</p>
                                <ListGroup>
                                    {plan.map(p => { 
                                        if (p.date === dt) {
                                            return (<ListGroup.Item key={p.id} variant={p.done?"success":"warning"}  className="d-flex">
                                                <div className="mr-auto">{p.date} - {p.task}</div>
                                                <ButtonGroup>
                                                    <Button variant="outline-danger" onClick={() => setTask(p)}><FontAwesomeIcon icon={faPenSquare} /></Button>
                                                    <Button variant="outline-success" onClick={() => doneTask(p)}><FontAwesomeIcon icon={faCheckSquare} /></Button>
                                                    <Button variant="outline-primary" onClick={() => deleteTask(p.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                                </ButtonGroup>
                                            </ListGroup.Item>);
                                        }
                                        return null;
                                    })}
                                </ListGroup>
                            </div>
                        );
                    })}
                </Col>
                <Col lg="6" sm="12">
                    <Row>
                        <Form>
                            <Form.Group controlId="task">
                                <Form.Label>Task</Form.Label>
                                <Form.Control type="text" placeholder="Enter task" value={task.task} onChange={e => change(e, 'task')} />
                                <Form.Text className="text-muted">Id: {task.id}</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" placeholder="yyyy-mm-dd" value={task.date} onChange={e => change(e, 'date')} />
                            </Form.Group>
                            <Button variant="primary" onClick={save}>save</Button>
                            <Button variant="primary" onClick={cancel} hidden={(!task.id)}>cancel</Button>
                        </Form>
                    </Row>
                    <Row><Acumulation /></Row>
                </Col>
                
            </Row>
        </Container>
    );
}