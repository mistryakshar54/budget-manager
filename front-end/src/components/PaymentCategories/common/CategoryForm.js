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
      {getInput()}
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
            name="category" 
            component={formHandler} 
            label="Category Name*" />
        
          <Field 
            name="subcat" 
            component={formHandler}
            label="Sub Category*" />

          {!!btnText && <button className="btn btn-primary" type="submit">{btnText}</button>}
      </Form>
  
    );
    
}

const validate = formData => {
  let error = {};
  if(!formData.category){
      error.category = "please enter a category"
  }
  if(!formData.subcat){
      error.subcat = "please enter a sub category"
  }
  return error;
}

export default reduxForm({
    form: 'CategoryForm', validate
  })(CategoryForm);