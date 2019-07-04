import React , { useState } from 'react';
import { connect } from 'react-redux';
import * as CategoryActionCreators from '../../../store/actions/CategoryActionCreators';
import Spinner from 'react-bootstrap/Spinner';
import TableComponent from '../../UI/Table/Table';

const tableComponentData = {
    tableData : [],
    tableRows : ['Category Name' , 'Sub Category' , 'Actions']
}

const ViewPaymentCat  = ( props ) => {

    const editRecordHandler = ( record , recordIndex ) => {
        //Handler to handle edit record coming from Generic Table
        props.history.push('edit/'+record.id);
    }
    
    const deleteRecordHandler = ( record, recordIndex ) => {
        //Handler to handle delete record coming from Generic Table
        props.onDeletePaymendCategoryHandler( record,recordIndex );
    }

    if(props.requestState)
        {
            if( props.requestState.apiInProcess === true)
            {
                return(
                    <Spinner animation="grow" />
                    );
                }
                else if(props.requestState.status != 200)
                {
                    return(
                        <h1>Error fetching data</h1>
                        );
                    }
                    else
                    {
                        if( props.categoryData.categoryArr.length > 0 )
                        {
                            tableComponentData.tableData = props.categoryData.categoryArr;
                            return(
                                <div>
                                    {/* <NavLink className="btn btn-primary" to={`add`}>Add</NavLink>
                                    <NavLink className="btn btn-info" to={`edit/0`}>Edit</NavLink> */}
                                        <TableComponent tableComponentData={tableComponentData} 
                                         isReadOnly={false}
                                         editRecordCallback = { editRecordHandler }
                                         deleteRecordCallback = { deleteRecordHandler }/>
                                </div>

                            ); 
                        }
                else
                {
                    return(
                            <div>
                                <h1 className="gray-header">No categories defined</h1>
                            </div>
                        );
                }
                
            }
        }
        else
        {
            return(<h1>Loading...</h1>);
        }
     
        
    

}

const mapStateToProps = ( state ) => {
    return {
        categoryData : state.CategoryReducer,
        requestState : state.ApiReducer
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onLoadCategoryHandler : () => { dispatch(CategoryActionCreators.getAllPaymentCategories())},
        onDeletePaymendCategoryHandler : ( record , recordIndex ) => { dispatch( CategoryActionCreators.dispatchDeletePaymentCategory( record,recordIndex ) ) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPaymentCat);