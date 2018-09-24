import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import validate from './FormValidation.jsx';

const afterSubmit = (result, dispatch) => {
    dispatch(reset('EmployeeForm'));
}
const ActionForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form>
            <div>
                <Field name="id"  component={validate.renderField}  type="number" label="Id" validate={[validate.required, validate.maxLength15]}/>
            </div>
            <div>
                <Field name="email"  component={validate.renderField} type="mail" label="Mail" validate={[validate.required, validate.mail]} />
            </div>
            <div>
                <Field name="name" component={validate.renderField} type="textarea" label="Employee Name" validate={[validate.required, validate.maxLength15]}/>
            </div>
            <div>
                <Field name="age" component={validate.renderField} type="number" label="Age" validate={[validate.required, validate.maxLength15,validate.minValue18]}/>
            </div>
            <div>
                <Field name="desing" component={validate.renderField} type="text" label="Designation" validate={[validate.required, validate.maxLength15]}/>
            </div>
            <div>
                <Field name="project" component={validate.renderField} type="text" label="Project" validate={[validate.required, validate.maxLength15]}/>
            </div>
            <label></label>
            <Row>
                <Col lg={6}>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit(values => {
                        props.onSubmit({...values, add: true})
                    })}>Add</button>
                </Col>
                <Col lg={6}>
                    <button type="submit" className="btn btn-danger" onClick={handleSubmit(values => {
                        props.onSubmit({...values, add: false})
                    })}>Delete</button>
                </Col>
            </Row>
        </form>
    );
}

export default reduxForm({
    form: 'EmployeeForm',
    onSubmitSuccess: afterSubmit
})(ActionForm);
