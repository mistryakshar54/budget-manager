import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'

let AddPaymentForm = (props) => {
  const { handleSubmit } = props
  let time = new Date().getTime();
  return(
    <Form onSubmit={handleSubmit}>
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

    // <form onSubmit={handleSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="firstName">Mode Type</label>
    //     <Field name="modetype" component="input" type="text" />
    //   </div>
    //   <div  className="form-group">
    //     <label htmlFor="lastName">Mode Sub Type</label>
    //     <Field name="modesubtype" component="input" type="text" />
    //   </div>
    // </form>

  );
  
   
}

AddPaymentForm = reduxForm({
  // a unique name for the form
  form: 'AddPaymentForm'
})(AddPaymentForm)



export default AddPaymentForm