import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Form, FormGroup , FormControl,AlertDismissable,Glyphicon} from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap';

import employeeAction from './actions/employee';
import ActionForm from './ActionForm.jsx';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return (
        {
            employeeList: state.employeeDetail.employeeList,
        }
    );
};
const mapDispatchToProps = (dispatch) => ({
    addEmployee: (employeeList) => {dispatch(employeeAction.addEmployee(employeeList))}
});
let totalEmployeeList = [];
class Employee extends React.Component { 
    
    constructor(props) {
        super(props);
        totalEmployeeList = this.props.employeeList.slice();
        this.onFormSubmit = this.onFormSubmit.bind(this); 
        this.state = {
            activeSection: 1
        };
          this.handleSelect = this.handleSelect.bind(this);
    }
        handleSelect(selectedTab) {
          console.log('selectedTab', selectedTab);
        };

    onFormSubmit(newEmployee) {
        if (newEmployee.id) {
            if (newEmployee.add) {
                totalEmployeeList.push({id: newEmployee.id, name: newEmployee.name, age: newEmployee.age, designation: newEmployee.desing,
                    project: newEmployee.project
                });
            } else {
                _.remove(totalEmployeeList, function(value, key) {
                    return value.id == newEmployee.id;
                });
            }
            this.props.addEmployee({employeeList: totalEmployeeList});
        }
    };
    componentWillMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        totalEmployeeList = nextProps.employeeList.slice();
    }

    render() {
        return(
            <div className="employee">
                <h1 className="header">
                    Employee List
                </h1>
                <Row className="employee-row">
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className="employee-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Id
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Age
                                        </th>
                                        <th>
                                            Designation
                                        </th>
                                        <th>
                                            Project Assigned
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.employeeList.map(function(value, index){
                                        return (
                                            <tr className="c-pointer" key={value.id}>
                                                <td>
                                                    {value.id}
                                                </td>
                                                <td>
                                                    {value.name}
                                                </td>
                                                <td>
                                                    {value.designation}
                                                </td>
                                                <td>
                                                    {value.age}
                                                </td>
                                                <td>
                                                    {value.project}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <ActionForm onSubmit = {this.onFormSubmit} />
                    </Col>
                    <Tabs
                    activeKey={this.state.activeSection}
                        onSelect={this.handleSelect}
                        id="controlled-tab-example"
                    >
                        <Tab eventKey={1} title="personal">
                        Personal
                        </Tab>
                        <Tab eventKey={2} title="skills">
                        Skills
                        </Tab>
                        <Tab eventKey={3} title="employement">
                        Employement
                        </Tab>
                        <Tab eventKey={4} title="education">
                        Education
                        </Tab>
                        <Tab eventKey={5} title="certificate">
                        Certificates
                        </Tab>
                        <Tab eventKey={6} title="achievements">
                        achievements
                        </Tab>
                    </Tabs>
                </Row>
                <Player
                    poster="/assets/poster.png"
                    >
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                    <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton
                        rates={[5, 2, 1, 0.5, 0.1]}
                        order={7.1}
                        />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
            </div>
        );
    };
} 

Employee.propTypes = {
    tableName: PropTypes.string
}

const EmployeeTable = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeTable;
