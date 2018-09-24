import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap-modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import EmployeeTable from './EmployeeTable.jsx';

import * as d3 from "d3";
import '../scss/main.scss';

export class CenterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal : false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({showModal : true});
  }
  close() {
    this.setState({showModal : false});
  }
  render() {
    const tooltip = (
      <Tooltip id='modal-tooltip'>
        Your viewed via tooltip
      </Tooltip>
    );
    return(
        // <EmployeeTable EmployeeList = {this.props.employeeDetails} tableName = {this.props.tableName}/>
        <EmployeeTable/>
    );
  }
}
