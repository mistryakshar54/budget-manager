import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';

const formHandler = ({input, label, meta}) =>{
  // debugger;
  const getInput = () => {
    const {submitFailed, dirty, touched} = meta;
    const style =  (submitFailed && !dirty)? {border:'1px solid red'} : null;
    return (<input className="form-control" style={style} {...input} autoComplete='off'/>);
  }

  return ( //meta comes from validate function
  <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>{label}</Form.Label>
      {getInput(meta, input)}
      {errorMessage(meta)}
  </Form.Group>
)}

const errorMessage = ({error, submitFailed/*touched*/}) => {
  if(submitFailed && error) {
      return (
              <div style={{color:'#e7504c'}}>{error}</div>
      )
  }
}

const CategoryForm = ( props ) => {
    const { handleSubmit, btnText } = props
    return(
      <Form onSubmit={handleSubmit}>

          <Field 
            name="modetype" 
            component={formHandler} 
            label="Mode Type*" />
        
          <Field 
            name="modesubtype" 
            component={formHandler}
            label="Mode Sub Type*" />

          {!!btnText && <button className="btn btn-primary" type="submit">{btnText}</button>}
      </Form>
  
    );
    
}

const validate = formData => {
  let error = {};
  if(!formData.modetype){
      error.modetype = "please enter a Mode Type"
  }
  if(!formData.modesubtype){
      error.modesubtype = "please enter a Mode Sub Type"
  }
  return error;
}

export default reduxForm({
    form: 'CategoryForm', validate
  })(CategoryForm);