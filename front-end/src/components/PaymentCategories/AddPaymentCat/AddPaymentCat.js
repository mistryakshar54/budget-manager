import React , {useState} from 'react';
import {connect} from 'react-redux';
import * as CateogryActionCreators from '../../../store/actions/CategoryActionCreators';
import AddPaymentCatfForm from './AddPaymentCatForm';



const AddPaymentCat = ( props ) => {

    const onFormSubmitHandler = ( formValues ) => {
        console.log(formValues);
        formValues.id=props.paymentCatDataArr.length;
        props.onSubmitHandler( formValues );
        props.history.push('view')
    }
         return(
                <div>
                    <div className="h5">Add New Category</div>
                    <AddPaymentCatfForm onSubmit={onFormSubmitHandler}/>
                    {/* <ToastComponent  
                        showToast={this.state.toggleToast} 
                        closeToastHandler={this.toastToggleHandler}
                        showMessage="New Payment Mode Added!"
                        /> */}
                </div>
         );   
    

}

const mapStateToProps = ( state ) => {
    return{
        paymentCatDataArr : state.CategoryReducer.categoryArr
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onSubmitHandler : ( paymentCatData ) => { dispatch( CateogryActionCreators.dispatchCreatePaymentCategory( paymentCatData ) ) }
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(AddPaymentCat);