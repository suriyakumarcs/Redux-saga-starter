import React from 'react';
import { LeftPannel } from './LeftPannel.jsx';
import { CenterComponent } from './CenterComponent.jsx';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import employeeAction from './actions/employee';

const mapDispatchToProps = (dispatch) => ({
    addEmployeeList: (employeeList) => {dispatch(employeeAction.viewEmployeeList(employeeList))}
});


class MainContent extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    console.log('nextProps----1', nextProps);
}
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [
          {
            name: "supresm",
            age: 23,
            designation: "Developer",
            id: 2,
            project: "JASS",
          },
          {
            name: "Danie",
            age: 24,
            designation: "Testting",
            id: 3,
            project: "ITJH"
          },
          {
            name: "Rumo",
            age: 29,
            designation: "GALAXY",
            id: 12,
            project: "FHSNN"
          },
          {
            name: "Munro",
            age: 23,
            designation: "Manager",
            id: 13,
            project: "JASS"
          },
          {
            name: "Magi",
            age: 21,
            designation: "Manager",
            id: 25,
            project: "UID"
          },
          {
            name: "Kany",
            age:34,
            designation: "Lead",
            id: 24,
            project: "MED"
          },
      ],
      listName: 'employeeList'
    };
    this.props.addEmployeeList({employeeList: this.state.employeeList});
  };  
  render() {
    return(
      // <div className='main-content'>
      //   <div className='row body'>
      //     <Col lg={2} md={5} sm={2} xs={2}>
      //       <LeftPannel/>
      //     </Col>
      //     <Col lg={10} md={7} sm={10} xs={10}>
      //       <Row>
      //         <Col lg={12} md={7} sm={10} xs={10}>
      //           {/* <CenterComponent/> */}
      //         </Col>
      //       </Row>
      //     </Col>

      //   </div>
      // </div>
      <div>
      </div>
    );
  }
}

const Employee = connect(null, mapDispatchToProps)(MainContent);

export default Employee;
