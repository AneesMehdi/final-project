import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Footer from './FooterComponent'
function Home(props) {

    const cardStyle = { 
                font: "25px" 
            };
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1 mt-5">
                    <FadeTransform
                        in
                        transformProps={{
                        exitTransform: 'scale(0.2) translateY(-50%)'
                        }}>
                       
                        <Card style={{minHeight: "80px"}}>
                            <CardBody>
                                <CardTitle style={{ fontSize:"22px" }}> Wiki Data </CardTitle>
                                <CardSubtitle >A Collaboratively Edited Multilingual Knowledge Graph </CardSubtitle>
                                <CardImg src='assets/images/wikidata.png' />
                                <CardText style={{ fontSize:"16px" }}>Wikidata is a free and open knowledge base that can be read and edited by both humans and machines.
                                            Wikidata acts as central storage for the structured data of its Wikimedia sister projects including Wikipedia, Wikivoyage, Wiktionary, Wikisource, and others.
                                    <a target="_blank" href="https://www.wikidata.org/"> Read more </a></CardText>
                            </CardBody>
                        </Card>   
                </FadeTransform>
                    
                </div>

                <div className="col-12 col-md m-1 mt-5 ">
                <FadeTransform
                        in
                        transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                       
                        <Card style={{minHeight: "80px"}}>
                            <CardBody>
                                <CardTitle style={{ fontSize:"22px" }}> GO</CardTitle>
                                <CardSubtitle >THE GENE ONTOLOGY RESOURCE  </CardSubtitle>
                                <CardImg src='assets/images/gene.png' />
                                <CardText>
                                The Gene Ontology (GO) knowledgebase is the world’s largest source of information on the functions of genes. This knowledge is both human-readable and machine-readable, and is a foundation for computational analysis of large-scale molecular biology and genetics experiments in biomedical research.
                                    <a target="_blank" href="http://geneontology.org"> Read more </a></CardText>
                            </CardBody>
                        </Card>   
                </FadeTransform>
                </div>

                <div className="col-12 col-md m-1 mt-5 ">
                <FadeTransform
                        in
                        transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                       
                        <Card style={{minHeight: "80px"}}>
                            <CardBody>
                                <CardTitle style={{ fontSize:"22px" }}> European Environment Agency</CardTitle>
                                <CardSubtitle >  Data and maps </CardSubtitle>
                                <CardImg src='assets/images/eua.png' />
                                <CardText style={{ fontSize:"16px" }}>
                                The European Environment Agency provides sound, independent information on the environment for those involved in developing, adopting, implementing and evaluating environmental policy, and also the general public. In close collaboration with the European Environmental Information and Observation Network (Eionet) and its 32 member countries, the EEA gathers data and produces assessments on a wide range of topics related to the environment.
                                    <a target="_blank" href="https://www.eea.europa.eu/"> Read more </a></CardText>
                            </CardBody>
                        </Card>   
                </FadeTransform>
                </div>
            </div>
            <Footer />
        </div>

    );
}

         



export default Home;