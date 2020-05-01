import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt, faPenSquare,  } from '@fortawesome/free-solid-svg-icons'
import {usePlanner} from '../context/PlannerContext'

export default function Home () {
    const {plan, addTask, deleteTask, updateTask} = usePlanner();

    const [task, setTask] = useState({});

    const save = () => {
        console.log("vai salvar ", task);
        if(task.id) {
            console.log('existe')
            updateTask(task);
        } else {
            console.log('nao existe vai atualzar')
            addTask(task);
        }
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
                <Col>
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
                        <Button variant="primary" onClick={save}>
                            save
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <ListGroup>
                        {plan.map(p => {
                            return(
                                <ListGroup.Item key={p.id} variant={p.done?"success":"warning"}>
                                    {p.date} - {p.task} 
                                    <Button variant="outline-danger" onClick={() => setTask(p)}><FontAwesomeIcon icon={faPenSquare} /></Button>
                                    <Button variant="outline-success" onClick={() => doneTask(p)}><FontAwesomeIcon icon={faCheckSquare} /></Button>
                                    <Button variant="outline-primary" onClick={() => deleteTask(p.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </ListGroup.Item>
                            );
                        })}
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}