import React,{Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });        
    }
  
      handleSubmit(values) {
        if(values.endpoint){
            this.toggleModal();
            this.props.configureEndpoint(values.endpoint);
        }
        else{
            alert('Please select an endpoint')
        }
    }
  
    render() {
        /**
         * Styling
         */
        const navBtn = {
            color: "white", 
            borderColor: "whitesmoke",  
            minWidth: 40,
            borderRadius: 2,
            margin: 1
        };
    

    return(
    <div>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
            
                <h3>Sparql Query Interface</h3>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
          
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline style={navBtn} onClick={()=>window.location.href='/home'}>
                           <span className="fa fa-home fa-lg"/> Home
                        </Button>
                    </NavItem>
                    <NavItem >
                        
                        <Button outline   style={navBtn} onClick={()=>window.location.href='/query'}>
                             <span className="fa fa-play fa-lg" /> Query
                        </Button>
                        
                    </NavItem>
                    <NavItem>
                        <Button outline style={navBtn} onClick={this.toggleModal} >
                            <span className="fa fa-cog fa-lg"  /> Configuration
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>


      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Endpoint Configuration</ModalHeader>
                    <ModalBody>
                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                             <Row className="form-group">
                                 <Col md={12}>
                                     <Label>Select an Endpoint</Label>
                                     <Control.select model=".endpoint" name="endpoint"
                                             className="form-control">
                                               <option key="-1" value={null}></option>          
                                        {
                                            this.props.endpoints.map ((endpoint) => {
                                                return (
                                                    <option key={endpoint.id} value={endpoint.url}>{endpoint.label}</option>             
                                                );
                                            })
                                        }
                                     </Control.select>
                                 </Col>
                             </Row>
            
                             <Row className="form-group">
                                 <Col >
                                 <br></br>
                                     <Button outline type="submit" color="secondary">
                                        <span className="fa fa-cog fa-lg"  /> Configure
                                     </Button>
                                 </Col>
                             </Row>
                         </LocalForm>
                         </ModalBody>
                </Modal>   
    </div>
    );
  }
}

export default Header;