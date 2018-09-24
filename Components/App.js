import React from 'react';
import { Header } from './Header.jsx';
import  Employee  from './MainContent.jsx';
import Row from 'react-bootstrap/lib/Row';

class App extends React.Component {
    render() {
        return (
            <Row className="app-content">
                <Header />
                <Employee />
            </Row>
        );
    }
}
export default App;
