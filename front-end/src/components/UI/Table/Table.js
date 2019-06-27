import React from 'react';
import Table from 'react-bootstrap/Table'

const onClickHander = (item,index) => {
    // debugger;
    console.log(item);
}


const TableComponent = ( props ) => {
    // debugger
    const { tableConfig , tableData , tableRows } = props.tableComponentData;

    let theads = tableRows.map( (item,index)=>{
        return(
                <th key={index}>
                    {item}
                </th>
                
            );
    });

    let tdata = tableData.map( (item,index)=>{

            let actionsTr = <td>

            </td>;
            if( tableConfig.actions.length > 0 )
            {

            }
            return(
                <tr key={index}>
                    {
                        Object.keys(item).map( (itemKey , itemKeyIndex) =>{
                        // ind++;
                        if(itemKey !== 'id') { 

                            return(
                                 <td key={index+'_'+itemKeyIndex}>
                                      {item[itemKey]} 
                                 </td>
                            )
                        }
                        })

                    }
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
        return <h1>Nothing to show here</h1>
    }



}

export default TableComponent