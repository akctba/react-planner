import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PlannerProvider from './context/PlannerContext';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
    <Container fluid>
      <MyNavBar />
      <PlannerProvider>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
        </PlannerProvider>
    </Container>
    </Router>
  );
}

export default App;
