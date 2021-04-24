import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { DEFAULT_QUERY } from '../shared/defaultQuery';

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
       
        <div class="container">
            
            <Form style={{ marginTop: "5px" }} onSubmit={this.handleSubmit}>
                <FormGroup style={{ marginBottom: "0px" }}>
                    <Input type="textarea" name="query" id="query" rows="12" value={this.state.query} onChange={this.onChange} />
                </FormGroup>
                  <Button type="submit" color="success" className="ml-auto"><span className="fa fa-play-circle fa-lg"/> Execute</Button>
                  <Button color="secondary" type="button" onClick={this.reset}><span className="fa fa-refresh" /> Reset</Button>    
                  <div className="endpoint" > Endpoint: {this.props.label}</div>
            </Form>
          
        </div>
        )
    }
    }
}

export default QueryComponent