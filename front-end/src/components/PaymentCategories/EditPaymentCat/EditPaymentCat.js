import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import * as CategoryActionCreators from '../../../store/actions/CategoryActionCreators';
import Spinner from 'react-bootstrap/Spinner'
import CategoryForm from '../common/CategoryForm';

const EditPaymentCat = ( props ) => {

    useEffect( () => {
        
        let idToFetch = props.match.params.categoryId;
        if(props.match.params.categoryId)
        {
            props.onLoadDataHandler(idToFetch);
        }
    },[] );


    const onFormSubmitHandler = ( formValues ) => {
        props.onSavePaymentCatHandler(formValues);
        props.history.push('../view');

    }

    if(props.requestState)
    {
        if(props.requestState.apiInProcess === true)
        {
            return(<Spinner animation="grow" />);
        }
        else
        {
            if( props.requestState.status === 200 && props.initialValues.id === parseInt(props.match.params.categoryId) )
            {
               return(
                   <div>
                       <div className="h5">Edit Payment Category</div>
                       <CategoryForm onSubmit={onFormSubmitHandler} initialValues={props.initialValues} btnText="Update Category"/>
                   </div> 
                    
               );
            }
            else
            {
                return(<Spinner animation="grow" />);
                // return(<h1>No data fetched!!</h1>);
            }
           
        }
    }


}

const mapStateToProps = ( state ) => {

    return {
        initialValues : state.CategoryReducer.selectedCategoryDetail,
        requestState : state.ApiReducer,
    }
}

const mapDispatchToProps  = ( dispatch ) => {
    return{
        onLoadDataHandler : (idToFetch) => dispatch( CategoryActionCreators.dispatchGetCategoryDetail(idToFetch) ),
        onSavePaymentCatHandler : ( updatedPaymentcategory ) => dispatch( CategoryActionCreators.dispatchSaveCategoryDetail(updatedPaymentcategory ))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPaymentCat);