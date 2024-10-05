import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import NoImageCard from './NoImageCard';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class OnGoing extends Component {
    constructor() {
        super();
        this.state = {
            industrial: [
                {
                    id: 3,
                    name: "Garware Bestretch, Wai",
                    type: 2, 
                    desc : "Industrial Sheds| Cost - 900 Lacs ",
                    img: "assets/img/projects/garware-bestrec.jpg" 
                },
                {
                    id: 3,
                    name: "VTP Pegasus",
                    type: 2, 
                    desc : "Scope - Podium Core & Shell works | Cost - 540 Lacs | Location - Manjri, Pune",
                    img: "assets/img/projects/VTP Pegasus.jpeg" 
                },
                {
                    id: 3,
                    name: "Exide Industries Ltd.",
                    type: 2, 
                    desc : "Scope - Extension of Submarine Shed | Cost - 400 Lacs | Location- Taloja, Pune",
                    img: "assets/img/projects/garware-bestrec.jpg" 
                },
            ],
            residential: [
                {
                    id: 2,
                    name: "Godrej Elements, Pune",
                    type: 2, 
                    desc : "Residential projects | cost- 1021 Lacs | consultant- Kapadia Associates, | Location- Hinjewadi Pune",
                    img: "assets/img/projects/elements.jpg"
                },
                {
                    id: 5,
                    name: "Godrej Park Greens, Pune",
                    type: 2, 
                    desc : "Residential Project | Finishing Work | Cost: 850 Lacs | Client - Godrej Properties Limited | Location: Mamurdi, Pune",
                    img: "assets/img/projects/Godrej Greens.jpg" 
                },
                {
                    id: 5,
                    name: "Godrej Nurture",
                    type: 2, 
                    desc : "Residential Project | Scope -  Tower finishing works | Cost- 720 Lacs | Client - Godrej Properties Limited | Location- Mamurdi, Pune.",
                    img: "assets/img/projects/godrej nurture.jpeg" 
                },
                {
                    id: 5,
                    name: "Avante Spaces Ltd by Kirloskar",
                    type: 2, 
                    desc : "Residential Project | Scope -  Landscape, Hardscape & Softscape development for Commercial Building | Cost - 300 Lacs | Client - Godrej Properties Limited | Location- Kothrud, Pune",
                    img: "" 
                },
                {
                    id: 5,
                    name: "Isprava Vesta Pvt. Ltd.",
                    type: 2, 
                    desc : "Residential Project | Scope - Core & Shell works for Luxury Bungalows & Infra works | Cost - 740 Lacs | Client - Godrej Properties Limited | Location- Moira, Goa.",
                    img: "" 
                },
            ],
            itbuildings: [
                {
                    id: 3,
                    name: "Solitaire Business Hub",
                    type: 2, 
                    desc : "Scope - Finishing & Infra works| Cost - 640 Lacs | Location - Baner, Pune",
                    img: "" 
                },
            ],
            mep: [
                
            ]
        }
    }

    render() {
        let industrial = this.state.industrial.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        // let institutional = this.state.institutional.map(person => {
        //     if(person.img !== "") {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <ProjectCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        //     else {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <NoImageCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        // })
        let residential = this.state.residential.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        let itbuildings = this.state.itbuildings.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        // let mep = this.state.mep.map(person => {
        //     if(person.img !== "") {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <ProjectCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        //     else {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <NoImageCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        // })
        return (
            <div className="clientele" data-aos="fade-up" >
                <br />
                <h1><strong data-aos="fade-up">Industrial</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {industrial}                        
                    </Row>
                </Container>
                {/* <br /><hr /><br />                                      uncomment in case of new institutional project
                <h1><strong data-aos="fade-up">Institutional</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {institutional}                        
                    </Row>
                </Container> */}
                <br /><hr /><br />
                <h1><strong data-aos="fade-up">Residential</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {residential}                        
                    </Row>
                </Container>
                <br /><hr /><br />
                <h1><strong data-aos="fade-up">IT Buildings</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {itbuildings}                        
                    </Row>
                </Container>
                <br /><hr /><br />
                {/* <h1><strong data-aos="fade-up">MEP Projects</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {mep}                        
                    </Row>
                </Container> */}
                <br /><br />
            </div>
            
        )
    }
}



export default OnGoing;
