import React from 'react';
import '../scss/main.scss';
import {Button} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LeftPannel } from './LeftPannel.jsx';

import Home from './Home.jsx';
import { CenterComponent } from './CenterComponent.jsx';;

export class Header extends React.Component{
    render() {
        return (
            <Row className="body-row">
                <Col lg={12} md={7} sm={10} xs={10} className="body-column">
                    <Router>
                        <div className='container-fluid header'>
                            <Row>
                                <Col lg={1} md={1} xs={1}>
                                    <Row>
                                    <Col lg={1} md={1} xs={1}>
                                        <img className='image' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'/>
                                    </Col>
                                    <Col lg={1} md={1} xs={1}>
                                        <h2 className='heading'>React</h2>
                                    </Col>
                                    </Row>
                                </Col>
                                <Col lg={8} md={5} xs={5}>                        
                                    <nav className="navbar navbar-expand-sm navbar-dark nav-menu">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/list" className="nav-link">Employee List</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="/" className="nav-link">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                            <div className='main-content'>
                                <div className='row body'>
                                    <Row  className="content-row">
                                        <Col lg={2} md={5} sm={2} xs={2}>
                                            <LeftPannel/>
                                        </Col>
                                        <Col lg={10} md={7} sm={10} xs={10}>
                                        <Switch>
                                            <Route exact path='/' component={Home} />
                                            <Route  path='/list' component={CenterComponent} />
                                        </Switch>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Router>
                </Col>
            </Row>    
        );
    }
}