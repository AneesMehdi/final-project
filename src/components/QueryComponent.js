import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { DEFAULT_QUERY } from '../shared/defaultQuery';
import Table from  'react-bootstrap/Table'

function ResultTable({result}) {
    if( !result ){
        return(
            <></>
        )
    }
    else{
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
}
 class QueryComponent extends Component {
     constructor(props){
         super(props);
         this.state = {
             query: DEFAULT_QUERY
         }
         this.onChange = this.onChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.reset = this.reset.bind(this)
    }
    handleSubmit = () => {
        this.props.executeQuery(this.state.query);
    }
    onChange = (e) => {
       this.setState({
           query: e.target.value
       })
    }
    reset = () => {
        this.setState({
            query: ''
        })
    }

    
    render() {
        if( !this.props.endpoint ){
            return (
                <div class="container">
                    <div class="alert alert-danger" role="alert">
                        Please configure an endpoint before posting queries!
                    </div>
                </div>
            )    
        }
        else{

        
        return (
       
        <div className="container">
            
            <Form style={{ marginTop: "5px" }} onSubmit={this.handleSubmit}>
                <FormGroup style={{ marginBottom: "0px" }}>
                    <Input type="textarea" name="query" id="query" rows="12" value={this.state.query} onChange={this.onChange} />
                </FormGroup>
                  <Button type="submit" color="success" className="ml-auto"><span className="fa fa-play-circle fa-lg"/> Execute</Button>
                  <Button color="secondary" type="button" onClick={this.reset}><span className="fa fa-refresh" /> Reset</Button>    
                  <div className="endpoint" > Endpoint: {this.props.label}</div>
            </Form>
          {<ResultTable result={this.props.result}/>}
        </div>
        )
    }
    }
}

export default QueryComponent