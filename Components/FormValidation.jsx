import React from 'react';

const required = (value) => (value ? undefined : 'required');
const maxLength = max => value => ( value && value.length > max ? `Must be ${max} characters or less`: undefined);
const maxLength15 = maxLength(15);
const minValue = min => value =>
value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const mail = (value) => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
);
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning}
}) => (
    <div>
        <label>
        </label>
        <input {...input} className="form-control" placeholder={label}  type={type} />
        {   
            touched &&
            ((error) && <span className="form-error">{error}</span>) ||
            (warning) && <span className="form-warning">warning</span>
        }
    </div>
)

export default {
    renderField,
    required,
    maxLength15,
    mail,
    minValue18
};