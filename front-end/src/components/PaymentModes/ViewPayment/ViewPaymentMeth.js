import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableComponent from '../../UI/Table/Table';
import {NavLink} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import * as PaymentActions from '../../../store/actions/PaymentActionCreators';

const tableComponentData = {
    tableData : [],
    tableRows : ['Payment Mode' , 'Payment Sub Mode' , 'Actions']
}


class ViewPaymentMeth extends Component{
    editRecordHandler = ( record , recordIndex ) => {
        //Handler to handle edit record coming from Generic Table
        debugger;
        this.props.history.push('edit/'+recordIndex);
    }
    
    deleteRecordHandler = ( record , recordIndex ) => {
        //Handler to handle delete record coming from Generic Table
        debugger;
        this.props.onDeletePaymendMode( record, recordIndex );
    }
    render(){
        // debugger;
        if(this.props.requestState)
        {
            if( this.props.requestState.apiInProcess === true)
            {
                return(
                    <Spinner animation="grow" />
                    );
                }
                else if(this.props.requestState.status != 200)
                {
                    return(
                        <h1>Error fetching data</h1>
                        );
                    }
                    else
                    {
                        if( this.props.paymentDataArr.paymentModeArr.length > 0 )
                        {
                            tableComponentData.tableData = this.props.paymentDataArr.paymentModeArr;
                            return(
                                <div>
                                    {/* <NavLink className="btn btn-primary" to={`add`}>Add</NavLink>
                                    <NavLink className="btn btn-info" to={`edit/0`}>Edit</NavLink> */}
                                        <TableComponent tableComponentData={tableComponentData} 
                                         isReadOnly={false}
                                         editRecordCallback = { this.editRecordHandler }
                                         deleteRecordCallback = { this.deleteRecordHandler }/>
                                </div>

                            ); 
                        }
                else
                {
                    return(
                            <div>
                                <h1 className="gray-header">No payment modes defined</h1>
                                {/* <NavLink className="btn btn-danger" to={`add`}>Add</NavLink> */}
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
}

const mapStateToProps = (state) => {
    // debugger;
    return {
        paymentDataArr : state.PaymentReducer,
        requestState : state.ApiReducer,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletePaymendMode : ( paymentMode , recordIndex ) => { dispatch( PaymentActions.deletePaymentModeDetail( paymentMode , recordIndex ) ) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPaymentMeth);