import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Edtech startup",
      description: "Frontend Development",
      imgUrl: projImg1,
      url: "https://edukoya-web.netlify.app/"
    },
    {
      title: "Business Startup",
      description: "Frontend Development",
      imgUrl: projImg2,
      url: "https://thedigiscript.com/"
    },
    {
      title: "E-commerce store",
      description: "Fullstack Development",
      imgUrl: projImg4,
      url: "https://github.com/ainobs"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://edukoya-web.netlify.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://edukoya-web.netlify.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://edukoya-web.netlify.app/"
    },
  ];
  const proj = [
    {
      title: "PowerBI Dashboard",
      description: "Frontend Development",
      imgUrl: projImg5,
      url: "https://github.com/ainobs/Interactive-visualization-ICA"
    },
    {
      title: "Sunburst chart",
      description: "D3.js Visual",
      imgUrl: projImg6,
      url: "https://group1-ica.netlify.app/aienobe/"
    }
  ]
  const proj2 = [
    {
      title: "Weather/GPS app",
      description: "Android Development",
      imgUrl: projImg5,
      url: "https://github.com/ainobs/VikWeather"
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Explore more projects and dive into the depth of my work. Each project is a testament 
                  to my dedication, problem-solving skills, and passion for software development.
                </p><br/>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Visualisation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Android Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        Developed a power bi dashboard to visualise sales data and aid business decisions of a superstore
                        which  was a deliverable for my data visualisation coursework.
                      </p>
                      <Row>
                        {
                          proj.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        Developed a weather android application using android studio and java
                        which was a deliverable for my mobile app development coursework.
                      </p>
                      <Row>
                        {
                          proj2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
