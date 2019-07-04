import React , {useState} from 'react';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'

let PaymentCatForm = ( props ) => {
    const { handleSubmit } = props
    return(
      <Form onSubmit={handleSubmit}>
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
PaymentCatForm = reduxForm({
    // a unique name for the form
    form: 'PaymentCatForm'
  })(PaymentCatForm)
  
  
export default PaymentCatForm