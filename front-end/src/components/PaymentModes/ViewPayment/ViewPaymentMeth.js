import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableComponent from '../../UI/Table/Table';
import {NavLink} from 'react-router-dom';

const tableComponentData = {
    tableConfig : {
        actions : [
            {
                name : 'Edit',
                click : 'onClickHander()'
            }
        ]
    },
    tableData : [],
    tableRows : ['Payment Mode' , 'Payment Sub Mode']
}
class ViewPaymentMeth extends Component{
    render(){
        // debugger;
        if(this.props.requestState)
        {
            if( this.props.requestState.apiInProcess === true)
            {
                return(
                    <h1>Loading Data</h1>
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
                                    <NavLink className="btn btn-primary" to={`add`}>Add</NavLink>
                                    <NavLink className="btn btn-info" to={`edit/0`}>Edit</NavLink>
                                        <TableComponent tableComponentData={tableComponentData} />
                                </div>

                            ); 
                        }
                else
                {
                    return(
                            <div>
                                <h1>No payment modes defined</h1>
                                <NavLink className="btn btn-primary" to={`add`}>Add</NavLink>
                                <NavLink className="btn btn-info" to={`edit/0`}>Edit</NavLink>
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

export default connect(mapStateToProps)(ViewPaymentMeth);