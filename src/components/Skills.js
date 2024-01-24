import skill1 from "../assets/img/react logo.svg";
import node  from "../assets/img/node logo.svg";
import mysql from "../assets/img/mysql logo.svg";
import css from "../assets/img/css logo.svg";
import java from "../assets/img/java logo.svg";
import powerbi from "../assets/img/powerBI.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <div className="p-text">
                        <p>
                          I bring a versatile set of skills to the table, allowing me to navigate 
                          challenges and contribute meaningfully to projects. My proficiency spans:
                          
                       
                        </p>
                        </div>
                       
                        <div className="flex-ctn">
                            <div className="item">
                                <img src={skill1} alt="Image" className="img" />
                                
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" className="img"/>
                                
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" className="img"/>
                                
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" className="img"/>
                                
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" className="img"/>
                                
                            </div>
                            <div className="item">
                                <img src={powerbi} alt="Image" className="img"/>
                                
                            </div>
                           
                      </div>
                    </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
