import React from 'react'
import Table from  'react-bootstrap/Table'


function ResultTable({result}) {
    alert(JSON.stringify(result));
    const columnNames = result.head.vars;
    const rows = result.results.bindings;
    alert(JSON.stringify(columnNames));
    function getRow(row, index){
        const rowValue = columnNames.map((name)=>{
            return (
                row[name].value
            )
        })
        
        return(
            <tr key={index}>{
                rowValue.map((value, index)=>{
                   return( <td key={index}>{value}</td>)
            })                
            }
            </tr>
        )
            
        }
  
    return (
        <div>
            <Table striped bordered hover className="answer-container">
                <thead>
                    <tr>
                        {
                        columnNames.map((name)=>(
                            <th key={name}>{name} </th>
                            ))      
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    rows.map((row, index)=>{
                        return( getRow(row, index))
                        })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default ResultTable;
