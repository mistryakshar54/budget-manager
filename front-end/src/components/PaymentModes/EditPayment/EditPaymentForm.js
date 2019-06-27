import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux';

let EditPaymentModeForm = ( props ) => {


    return(
        <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Mode Type</Form.Label>
          <Field className="form-control" name="modetype" component="input" type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Mode Sub Type</Form.Label>
          <Field className="form-control" name="modesubtype" component="input" type="text" />
        </Form.Group>
        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    );

}



EditPaymentModeForm = reduxForm({
    form: 'EditPaymentModeForm'
  })(EditPaymentModeForm)

export default EditPaymentModeForm;