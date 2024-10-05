import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import NoImageCard from './NoImageCard';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class Completed extends Component {
    constructor() {
        super();
        this.state = {
            industrial: [
                {
                    id: 1,
                    name: "Phoenix Mecano (India) Pvt. Ltd, Pune",
                    type: 1,
                    desc: "Industrial Project | Area - 25,000 sqft | Cost - 300 lacs | Architect - Archicon Associates, Pune | Location - Pirangunt, Tal.Maval",
                    img: "assets/img/projects/Phoenix-Mecano.jpg"
                },
                {
                    id: 2,
                    name: "Phoenix Mecano, Urse Pune",
                    type: 1,
                    desc: "Industrial Project | Area-60,000sqft | Cost- 600lacs | Architect-Archicon Associates, Consultant-FABS, | Location- Urse Pune.",
                    img: "assets/img/projects/Phoenix-Maccano-Urse-Completed.jpg"
                },
                {
                    id: 3,
                    name: "Phoenix Mecano (India) Pvt. Ltd, Pune",
                    type: 1,
                    desc: "Industrial Project | Area - 1,00,000sq.ft | Cost - 1200 lacs | Architect - Archicon Associates, Pune | Location - Urse, Tal.-Maval, Pune",
                    img: "assets/img/projects/Phoenix-Mecano-1200Lacs-.jpg"
                },
                {
                    id: 4,
                    name: "Exide Industries Ltd",
                    type: 1,
                    desc: "Industrial Project | Area - 60,000 sq. ft | Cost - 650 lacs | Consultant P K Associates Chinchwad MIDC, Pune",
                    img: "assets/img/projects/exide.jpg"
                },
                {
                    id: 5,
                    name: "Kellogg's India Ltd, Taloja",
                    type: 1,
                    desc: "Area - 1500 sq.ft | Cost - 300 lacs | Consultant - FABS India Pvt.Ltd | Location - Taloja MIDC, Panvel.",
                    img: "assets/img/projects/kellogs.jpg"
                },
                {
                    id: 6,
                    name: "Kelloggs India Ltd., Taloja",
                    type: 1,
                    desc: "Rehabilitation of tank deck, | Cost– 500 Lacs, | Location- Taloja Mumbai.",
                    img: "assets/img/projects/Kelloggs-500Lacs.jpg"
                },
                {
                    id: 7,
                    name: "Wal Mart India Private Limited, Kurnool",
                    type: 1,
                    desc: "Area - 45000 sq.ft., | Cost - 155 Lacs, | Architect: Framework Interiors, PMC- JLL, | Location - Kurnool, Andhra Pradesh",
                    img: "assets/img/projects/Walmart-Kurnool-.jpg"
                },
                {
                    id: 8,
                    name: "Progress Rail, Raipur",
                    type: 1,
                    desc: "Industrial Project | Area- 2,17,430 Sqft | cost- 6,48,46,377/- | Architect- Compendious Engineering Solutions Pvt Ltd | PMC- Knight Frank | Location- Urla Raipur",
                    img: "assets/img/projects/Progress-rail-final.jpg"
                },
                {
                    id: 9,
                    name: "Associated Aluminium Industries, Taloja",
                    type: 1,
                    desc: "Industrial Project | Area - 80,000 sq.ft | Cost - 450 lacs | Architect - Prahsant Kulkarni, Pune",
                    img: "assets/img/projects/associated.jpg"
                },
                {
                    id: 10,
                    name: "Shimizu, Shirwal, Pune",
                    type: 1,
                    desc: "Industrial Project | Area- 10,900 Sqft | cost- 2,92,13,856/- | Architect-Shimizu Corporation | Consultant- FABS | Location- Shirwal Pune",
                    img: "assets/img/projects/Shimizu-Shirwal-Completed.jpg"
                },
                {
                    id: 11,
                    name: "Crompton Greaves, Mumbai",
                    type: 1,
                    desc: "Industrial Project | Area - 25,000 sq.ft | Cost - 250 lacs | Architect - M/S Epicons, Mumbai. | Location - Kanjurmarg",
                    img: "assets/img/projects/crompton.jpg"
                },
                {
                    id: 12,
                    name: "Avery Dennision India Pvt Ltd, Pune",
                    type: 1,
                    desc: "Industrial Project | Area - 20,000 sq.ft | Cost - 200 lacs | Consultant - C.R.NarayanRao, Chennai. | Location - Ranjangaon MIDC",
                    img: "assets/img/projects/avery.jpg"
                },
                {
                    id: 13,
                    name: "Tredegar Film Products",
                    type: 1,
                    desc: "Industrial Project | Area-9000 sqft | Cost- 100 Lacs | Consultant- C.R. NarayanRao Chennai. | Client- Ratilal Bhagwandas Const.Co.",
                    img: "assets/img/projects/tredegar.jpg"
                },
                {
                    id: 14,
                    name: "Spicer India Pvt Ltd, Dharwad",
                    type: 1,
                    desc: "Industrial Projects | Area - 30,000 sq.ft | Cost - 275 lacs | Architect - Sandeep Shanbhag, Belguam. | Location - Dharwad, Karnataka",
                    img: "assets/img/projects/spiecer.jpg"
                },
                {
                    id: 15,
                    name: "Gumtree Traps Pvt. Ltd., Goa",
                    type: 1,
                    desc: "Area – 5,500sqft | Cost-338 Lacs, | Architect-Excelarch architects & Engineers, | Clint- Gumtree Traps pvt Ltd, | Location- Goa India.",
                    img: "assets/img/projects/Gumtree-goa-338lacs.jpg"
                },
                {
                    id: 16,
                    name: "Century Enka Ltd.,",
                    type: 1,
                    desc: "Area- 8608Sqft, | cost– 151 Lacs, | Consultant -Lele and Associates, | Location-Bhosari Pune.",
                    img: "assets/img/projects/Century-Enka.jpg"
                },
                {
                    id: 17,
                    name: "Gayatri Bio-Organics Ltd, Hydrabad",
                    type: 1,
                    desc: "Industrial Project | Area- 37,400 sq. ft | cost- 3,09,30,489.21/- | Architect- Gayatri bio-organics Ltd | Client- FABS | PMC- FABS | Location- Sangareddy Hayderabad",
                    img: "assets/img/projects/Gaytri-Sangareddy-2.jpg"
                },
                {
                    id: 37,
                    name: "Exide Industries Ltd, Taloja",
                    type: 1,
                    desc: "UGWT & Road, | Cost - 107 Lacs, | Consultant - PK Associates, | Location - Taloja",
                    img: "assets/img/projects/Exide-Indus-Taloja-site-107Lacs.jpg"
                },
                {
                    id: 38,
                    name: "WalMart India Private Limited, Tirupati",
                    type: 1,
                    desc: "Area - 75600 sq.ft., | Cost - 764 Lacs, | Architect-Framework Interiors, PMC- JLL, | Location-Tirupati, Andhra Pradesh",
                    img: "assets/img/projects/Walmart-tirupati-764lacs.jpeg"
                },
                {
                    id: 39,
                    name: "Mahindra Vehicle Manufactures Ltd. Pune",
                    type: 1,
                    desc: "Industrial Project | Area: 50,400 sq. ft | Cost: 6,82,00,000/- | Architect: Edifice Consultants Pvt. Ltd. (Edifice) | Client: Mahindra Vehicle Manufacturers Ltd (MVML) | PMC: Tata Consulting Engineers Limited. (TCE) | Location: MIDC Chakan-Pune",
                    img: "assets/img/projects/Mahindra-for-ongoing.jpg"
                },
                {
                    id: 40,
                    name: "Wirtgen India Pvt Ltd. Pune",
                    type: 1,
                    desc: "Industrial Project | Area: 2,15,280.00 sq. ft | Cost -1165 Lacs | Architect: Venkataramanan Associates | Client: Wirtgen India pvt Ltd | PMC: AMS Consultant | Location: Yavat Pune",
                    img: "assets/img/projects/Wirtgen.jpeg"
                },
                {
                    id: 41,
                    name: "Century Rayon, Kalyan",
                    type: 1,
                    desc: "Industrial projects | Area – 53,800sqft | Cost- 885 Lacs | Architect- Lele and Associates | Location- Kalyan",
                    img: "assets/img/projects/Century-Rayon.jpeg"
                },
                {
                    id: 42,
                    name: "Gaware Fulflex India Pvt Ltd.",
                    type: 1,
                    desc: "Construction of new plant at Plant B, Wai Midc | Cost - 1190 Lacs | Scope - Industrial Shed & Allied Infra works. | Location- Wai, Satara",
                    img: "assets/img/projects/Garware Plant B.jpg"
                },
                {
                    id: 4,
                    name: "Garware Bestretch Ltd.",
                    type: 2, 
                    desc : "Extension of Banburry Plant at Plant A, Wai Midc | Cost - 590 Lacs | Scope - Industrial Shed & Allied Infra works | Location- Wai, Satara",
                    img: "assets/img/projects/Garware Plant A.jpg" 
                },
                {
                    id: 43,
                    name: "Sudarshan Chemicals Ltd.",
                    type: 1,
                    desc: "Industrial Sheds | Cost - 500 Lacs | Location - Mahad",
                    img: ""
                },
            ],
            institutional: [
                {
                    id: 18,
                    name: "Camp Education Society, Pune",
                    type: 5,
                    desc: "School Building | Area - 40,000 sq.ft | Cost - 850 lacs | Architect - Prashant Kilkarni, Pune | Location - Moshi Pradhikaran,",
                    img: "assets/img/projects/camp_education.jpg"
                },
                {
                    id: 19,
                    name: "BITS Pilani Goa",
                    type: 5,
                    desc: "Area - 25,000sq.ft | Cost - 1000 Lacs | Architech - Hafeez | Contractor Consultant - FABS",
                    img: "assets/img/projects/Bits-pilani-.jpg"
                },
                {
                    id: 20,
                    name: "BITS Pilani, Goa",
                    type: 5,
                    desc: "Area - 1,50,000 sqft | Cost - 4000 lacs | Architect - Hafeez Contractor Consultant - FABS",
                    img: "assets/img/projects/bits.jpg"
                },
                {
                    id: 21,
                    name: "BITS Pilani Goa (STP Work)",
                    type: 5,
                    desc: "Cost – 160 Lacs, | Consultant - Hafeez contrctor, | Location-Goa",
                    img: "assets/img/projects/Bits-Pilani-stp-work.jpg"
                },
                {
                    id: 22,
                    name: "Birla School",
                    type: 5,
                    desc: "Birla School – School Building for century rayon, Area-18,000Sqft, Cost-550 Lacs. Architect-Ashok Lele. Location- Kalyan,Mumbai.",
                    img: "assets/img/projects/birla.jpg"
                },
                {
                    id: 23,
                    name: "Corning India Ltd",
                    type: 5,
                    desc: "Area-12,270Sqft, | Cost– 165 Lacs, | Consultant-Espaciao Design Studio, | Location-Chakan,Pune.",
                    img: "assets/img/projects/Corning-india.jpg"
                },
            ],
            residential: [
                {
                    id: 24,
                    name: "Vantage Pune",
                    type: 2,
                    desc: "Residential High-Rise Building of 20 floors | Area - 2,00,000 sqft | Cost - 3000 lacs | Architech - M/S.Metaphors Consultant - Fidesto Projects Pvt.Ltd | Location - Baner, Pune",
                    img: "assets/img/projects/Vantage.jpg"
                },
                {
                    id: 25,
                    name: "Godrej Prana, Pune",
                    type: 2,
                    desc: "Commercial Projects | Area- 285000 sqft | cost- 14,92,52,664/- | Architect- KIPA | Consultant- Cushman and wakefield ind pvt ltd | Location- Undri Pune",
                    img: "assets/img/projects/Godrej-Prana-Completed.jpeg"
                },
                {
                    id: 26,
                    name: "Godrej Mamurdi, Pune",
                    type: 2,
                    desc: "Area - 22000 sq.ft., | Cost - 472 Lacs, | Consultant - Opolis Architect, | Location - Pune",
                    img: "assets/img/projects/Godrej-Mamurdi2.jpg"
                },
                {
                    id: 27,
                    name: "Prathmesh, Pune",
                    type: 2,
                    desc: "Residential Project | Area - 8,300 sq. ft | Cost - 128 lacs | Consultant - Jay Aeram Architects | Location - Baner, Pune",
                    img: "assets/img/projects/prathmesh.jpg"
                },
                // {
                //     id: 28,
                //     name: "Venkatesh Flora, Pune",
                //     type: 2,
                //     desc: "Residential Project. | Area-2,00,000Sqft. | Cost-150 Lacs. | Location-Mundhwa,Pune.",
                //     img: "assets/img/projects/venktesh.jpg"
                // },
                // {
                //     id: 29,
                //     name: "Hari Ganga, Pune",
                //     type: 2,
                //     desc: "Residential Project. | Area-1,20,000Sqft. | Cost-150 Lacs. | Location - Pune",
                //     img: "assets/img/projects/hari_ganga.jpg"
                // },
                {
                    id: 42,
                    name: "Profile Empyrean, Pune",
                    type: 2,
                    desc: "Residential Project Area- 1,00,000 Sqft cost- 1 1,80,00,000/- Architect- Ankur Associates Consultant- Fidesto Projects Pvt. Ltd. Location- Pashan, Pune",
                    img: "assets/img/projects/Profile-Empyrean-Ongoing.jpg"
                },
                // {
                //     id: 43,
                //     name: "Krishna Sankul, Kolhapur",
                //     type: 2,
                //     desc: "Commercial Projects | Area- 7300 Sqft | cost- 250 Lacs | Architect- Vishwanath Musale | Consultant- Ravi patil | Location- Kolhapur",
                //     img: "assets/img/projects/Krishna-sankul-Ongoing.jpg"
                // },
                {
                    id: 44,
                    name: "Xrbia Abode Developers Pvt Ltd. Pune",
                    type: 2,
                    desc: "Cost - 300 Lacs, | Location-Ambhi Pune.",
                    img: "assets/img/projects/Xrbia-Ambhi-site-Concrete-road-.jpg"
                },
                {
                    id: 45,
                    name: "Xrbia Abode Developers Pvt Ltd., Pune",
                    type: 2,
                    desc: "Cost - 250 Lacs, | Location-Jambhul Pune.",
                    img: "assets/img/projects/Xrbia-Jambhul-site-Concrete-road-.jpg"
                },
                {
                    id: 48,
                    name: "Godrej Hill Side, Pune",
                    type: 2,
                    desc: "Area - 90,000 sq.ft., | Cost - 500 Lacs | Location - Mhalunge, Pune",
                    img: "assets/img/projects/Godrej-Mamurdi2.jpg"        //add photo
                },
                {
                    id: 1,
                    name: "Yashvastu Parkland, Pune",
                    type: 2,
                    desc: "For Yashvastu Developers. | Area - 5,00,000sq.ft | Cost - 4250 Lacs | Consultant - Fidesto Projects Pvt. Ltd",
                    img: "assets/img/projects/Parkland-New-190719.jpg"
                },
                {
                    id: 3,
                    name: "Madhukosh, Pune",
                    type: 2,
                    desc: "Residential Project | Area: 1,50,000 sq. ft | Cost: 1471 Lacs | Architect: Nitin Joshi | Client: Fidesto Projects Private Limited | PMC: FABS | Location: Balewadi, Pune",
                    img: "assets/img/projects/Madhukosh-Balewadi-ongoing.jpg"
                },
                {
                    id: 4,
                    name: "Godrej Greens, Pune",
                    type: 2,
                    desc: "Residential Project | Scope - Finishing & Hardscape works | Cost: 990 Lacs | Client: Godrej Properties Limited | Location - Undri, Pune",
                    img: "assets/img/projects/godrej-greens.jpg"
                },
            ],
            itbuildings: [
                {
                    id: 30,
                    name: "Panchshil Tech Park 2, Pune",
                    type: 3,
                    desc: "Landscape and Hardscape | Area - 2,00,0000 sq.ft | Cost - 600 lacs | Consultant - Green fingers Landscapes Pvt. Ltd. | Location - Panchshil Tech Park",
                    img: "assets/img/projects/tech_park.jpg"
                },
                {
                    id: 31,
                    name: "KPIT Technology Ltd, Pune",
                    type: 3,
                    desc: "IT Building | Area - 40,000 sq.ft | Cost - 500 lacs | Architect - Venketramanan Asso | Consultant - S.S.Patne",
                    img: "assets/img/projects/kpit.jpg"
                },
                {
                    id: 32,
                    name: "Alfa Laval Baner, Pune",
                    type: 3,
                    desc: "Area -1,50,000Sqft. | Cost - 250 Lacs. | Location-Baner,Pune.",
                    img: "assets/img/projects/alfa_laval.jpg"
                },
                {
                    id: 45,
                    name: "Advansys, Hinjewadi, Pune",
                    type: 3,
                    desc: "Area-50,000 Sqft | cost Rs.9,52,73,031/- | Architect- Dandekar and Associate | Consultant-Dandekar and Associate | Location- Hinjewadi, Pune",
                    img: "assets/img/projects/Advansys-Ongoing.jpg"
                },
            ],
            mep: [
                {
                    id: 33,
                    name: "Kelloggs India Pvt. Ltd",
                    type: 4,
                    desc: "Area-15,000 sqft, | Cost - 60 Lacs, | Consultant- Design Sanyogica, | Location - Taloja Mumbai.",
                    img: ""
                },
                {
                    id: 34,
                    name: "Balbharati (Mohite & Sons)",
                    type: 4,
                    desc: "Area – 30,000 Sq.Ft. | Cost – 45 Lacs | Consultant – Wadia Techno Engineering | Location – Kolhapur",
                    img: ""
                },
                {
                    id: 46,
                    name: "Gumtree Traps Pvt Ltd., Goa",
                    type: 4,
                    desc: "Area - 5,500 sqft, | Cost -48 Lacs, | Architect -EXCELARCH Architects & Engineers, |Location - GOA,INDIA",
                    img: ""
                },
                {
                    id: 35,
                    name: "Hotel Cocoon, Pune",
                    type: 4,
                    desc: "Location – Magarpatta City, Pune | Area – 1,50,000 Sq.Ft. | Cost – 80 Lacs | Consultant – Architectural Energy Solution",
                    img: "assets/img/projects/Hotel-cocoon-MEP.jpg"
                },
                {
                    id: 36,
                    name: "Rooms XMLs",
                    type: 4,
                    desc: "Location – Pune | Area – 10,000 Sq.Ft. | Cost – 8.5 Lacs | Consultant – Wadia Techno Engineering",
                    img: "assets/img/projects/Rooms-XMLs-MEP.jpg"
                },
                {
                    id: 47,
                    name: "Wirtgen India Pvt Ltd., Pune",
                    type: 4,
                    desc: "Area - 2,15,280.00 sqft, | Cost - 1.5 crore, | Architect - Venkataramanan Associates, PMC - AMS Consultant, | Location - Yavat Pune.",
                    img: ""
                },
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        let industrial = this.state.industrial.map(person => {
            if (person.img !== "") {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        let institutional = this.state.institutional.map(person => {
            if (person.img !== "") {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        let residential = this.state.residential.map(person => {
            if (person.img !== "") {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        let itbuildings = this.state.itbuildings.map(person => {
            if (person.img !== "") {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        let mep = this.state.mep.map(person => {
            if (person.img !== "") {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md="12" sm="12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })

        return (
            <div className="clientele" data-aos="fade-up" >
                <br />
                <h1><strong data-aos="fade-up">Industrial</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>
                        {industrial}
                    </Row>
                </Container>
                <br /><hr /><br />
                <h1><strong data-aos="fade-up">Institutional</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>
                        {institutional}
                    </Row>
                </Container>
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
                <h1><strong data-aos="fade-up">MEP Projects</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>
                        {mep}
                    </Row>
                </Container>
                <br /><br />
            </div>
        )
    }
}

export default Completed;