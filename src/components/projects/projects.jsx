import { useEffect } from "react";
import laptop from "../../assets/laptop.jpg";
import "./projects.scss";
import gsap from "gsap";
import { Project } from "../";

const Projects = () => {

    const projectsArr = [
        {
            projectNo: 1,
            projectName: "NEST",
            projectImagePath: "../../assets/projectImg.png",
            projectDetails:"fldsjl slfsld sdlfk"
        }
    ]

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                // scroller: ".container",
                trigger: ".laptop-container img",
                start: "center 60%",
                end: "+=300",
                scrub: true,
                id: ".laptop-container img",
                // pin:true,
                horizontal: false,
                // markers: true,
            }
        })
            // .to(".laptop-img", { width:"100%" },0)
            .to(".project-container", { width: 600, height: 400 }, 0)
            .to(".laptop-container", { width: "100%" }, 0)
            .to(".project-container", { left: "30%" }, 0)
            .to(".project-container", { x: -300, opacity: 0 })
        // .to(".screen",{width:"72%", height:"45%", left:"14%", top:"6%"},0)
        // .to(".projects",{width:1200, height:400, left:300, top:200},0)
        // .to(".project-img",{width: 400, height:300},0)
    }, []);
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="laptop-container">
                <img className="laptop-img" src={laptop} alt="" />
                {/* <div className="screen"></div> */}
                <div className="projects">
                    {projectsArr.map((project) =>
                        <Project
                            projectNo={project.projectNo}
                            projectName={project.projectName}
                            projectImagePath={project.projectImagePath} 
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;