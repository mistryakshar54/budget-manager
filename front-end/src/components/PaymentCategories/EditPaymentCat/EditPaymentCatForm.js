import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux';

let EditPaymentCatForm = ( props ) => {


    return(
        <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Category Name</Form.Label>
          <Field className="form-control" name="category" component="input" type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Sub Category</Form.Label>
          <Field className="form-control" name="subcat" component="input" type="text" />
        </Form.Group>
        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    );

}

EditPaymentCatForm = reduxForm({
    form: 'EditPaymentCatForm'
  })(EditPaymentCatForm)

export default EditPaymentCatForm;