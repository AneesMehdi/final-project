import React, { Component } from 'react'
import  Header  from './HeaderComponent';
import Home from './HomeComponent';

import {ENDPOINTS} from '../shared/endpoints';
import QueryComponent from './QueryComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom' ;


export default class MainComponent extends Component {
    constructor (props){
        super(props);
        this.state = {
            endpoint: null,
            label: null,
            queryTime: null,
            result: null,
            numberOfAnswers:0,
            error: null
        }
        this.configureEndpoint = this.configureEndpoint.bind(this);
        this.executeQuery = this.executeQuery.bind(this);
        this.resetResult = this.resetResult.bind(this);
        
    }

   


    /**
     * Function to execute query on the endpoint
     */
    executeQuery = async (query ) => {
        //reseting answer
        if( !this.state.endpoint ){
            this.setState({
                error: 'Please configure an endpoint before posting a query!'
            })
        }
        else{
            this.resetResult();
            const startTime = Date.now();
            await fetch(this.state.endpoint, {
            method: 'POST',
            headers: {
                "Accept": "application/sparql-results+json",
                "Content-Type": "application/sparql-query"
            },
            body: query
            })
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error: ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    return error;
                }
            }, error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response =>  response.json())
            .then(data => {
         
                //setting querytime
                const endTime = Date.now();
                const time = endTime-startTime;
                this.setState({
                    queryTime: time
                });
                //Number of returned Answers
                this.setState({
                    numberOfAnswers: data.results.bindings.length
                });
              
                //saving the answer
                //  const  dataHeading = data.head
                //  const dataResult = data.results
               this.setState({
                    result:data
                }); 
         
                })
            .catch(error => {
                this.setState({
                    error: error.message
                });
            })
            
        }
      }

      resetResult = () => {
          this.setState({
            queryTime: null,
            answer:{},
            numberOfAnswers:0
          });
      }
    

      /*
      * later use reduc as the state is not stable (see configuration)
      */
    configureEndpoint = (endpoint) => {
        this.setState({
            endpoint: endpoint,
        });
      //finding label
      ENDPOINTS.forEach((ep)=>{
          if(ep['url']===endpoint){
             this.setState({
                 label: ep['label']
             });
          }
      });
    }

    
    render() {
        return (
            <div className="container">
                <Header endpoints={ENDPOINTS} configureEndpoint = {this.configureEndpoint}/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/query" component={() => <QueryComponent executeQuery={this.executeQuery} endpoint={this.state.endpoint} label={this.state.label} result={this.state.result}/>}/>                    
                  
                    <Redirect to="/home" />
                </Switch>
              
            </div>
        )
    }
}
