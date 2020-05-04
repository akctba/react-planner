import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {usePlanner} from '../context/PlannerContext'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

export default function Dashboard () {
    const {plan} = usePlanner();

    const daysStatus = () => {
        let data = [];
        
        let newdata = plan.reduce(
            (counter, item) => {
                if(!counter[item.date]) {
                    counter[item.date] = {date: item.date, done: (item.done?1:0),todo: (!item.done?1:0)};
                } else {
                    let d = counter[item.date].done;
                    let u = counter[item.date].todo;
                    counter[item.date] = {date: item.date, done: (item.done?d+1:d),todo: (!item.done?u+1:u)};
                }
                return counter;
            }, {}
        );
        console.log("newdata", newdata)

        data = Object.keys(newdata).map(k => {return newdata[k]})
        
        return data
    }

    return(
        <Container>
            <Row>
                <Col>dash</Col>
            </Row>
            <Row>
                <Col>
                    <BarChart data={daysStatus()} width={600} height={300}
                            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="done" stackId="a" fill="#28a745" />
                    <Bar dataKey="todo" stackId="a" fill="#dc3545" />
                    </BarChart>

                </Col>
            </Row>
        </Container>
    );
}