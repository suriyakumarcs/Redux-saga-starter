import React from 'react';
import '../scss/main.scss';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import _ from 'lodash';
// import { addItem } from './AppState.jsx';
var addedItem = [];
var itemNo = 0;

export class LeftPannel extends React.Component {
    constructor() {
        super();
        this.state = {
            addedItem: [],
            itemNo: 0
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);        
    }
    addItem(event) {
        if(event.key == 'Enter'){
            var itemNo = this.state.itemNo + 1;
            var addedItem = this.state.addedItem;
            addedItem.push({name:this.refs.item.value,id:itemNo});
            this.setState({addedItem: addedItem,itemNo: itemNo});
            this.refs.item.value = '';
        }
    };
    deleteItem(itemId) {
        var addedItem = this.state.addedItem;
        addedItem = _.reject(addedItem, (el) => { return el.id === itemId; });
        this.setState({addedItem: addedItem,itemNo: itemNo});
        this.refs.item.value = '';
    }
    render() {
        return (
            <div className='container h-75 pull-left left-pannel'>
                <Row>
                    <Col lg={10} md={10} xs={10}>
                        <input className="form-control search-box" ref="item" placeholder="Add Item" name="srch-term" id="srch-term" type="text" onKeyPress={this.addItem}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} md={10} xs={10}>
                        <ul className='theList'>
                            {this.state.addedItem.map(function(item, index){
                                return <li className='sub-list c-pointer' onClick={() => this.deleteItem(item.id)} key={ index }>{item.name}</li>;
                            }, this)}
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}