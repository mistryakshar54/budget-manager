import React from 'react';
import Table from 'react-bootstrap/Table';
import './Table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip'


const TableComponent = ( props ) => {
    // debugger
    const { tableData , tableRows} = props.tableComponentData;

    let theads = tableRows.map( (item,index)=>{
        return(
                <th key={index}>
                    {item}
                </th>
                
            );
    });

    let tdata = tableData.map( (item,index)=>{

        
        
            let editBtn = null , deleteBtn = null , actions = null;
            if( props.isReadOnly === false )
            {   
                if( props.editRecordCallback )
                {
                    editBtn = <FontAwesomeIcon className="icon-margin bm-icon" icon={faEdit} onClick={ ()=>props.editRecordCallback(item,index) }/>
                    // <button className="btn btn-warning" > Edit </button>
                }
                if( props.deleteRecordCallback )
                {
                    deleteBtn = <FontAwesomeIcon className="icon-margin bm-icon"  icon={faTrash} onClick={ ()=>props.deleteRecordCallback(item,index) }/>
                    // <button className="btn btn-danger" onClick={ ()=>props.deleteRecordCallback(item,index) }> Delete </button>
                }
                actions = <td>
                    {editBtn}
                    {deleteBtn}
                </td>
            }
            return(
                <tr key={index}>
                    {
                        Object.keys(item).map( (itemKey , itemKeyIndex) =>{
                        // ind++;
                        if(itemKey !== 'id') { 

                            return(
                                 <td className="table-data" key={index+'_'+itemKeyIndex}>
                                      {item[itemKey]} 
                                 </td>
                            )
                        }
                        })
                        
                    }
                    {actions}
                </tr>    
            );
       
    });

    if( tableData.length > 0 )
    {
        return(<Table responsive>
                    <thead>
                        <tr>
                            {theads}
                        </tr>
                    </thead>
                    <tbody>
                        {tdata}
                    </tbody>
                </Table>);
    }
    else
    {
        return <h1 className="content-header">Nothing to show here</h1>
    }



}

export default TableComponent