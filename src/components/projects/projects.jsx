import { useEffect } from "react";
// import laptop from "../../assets/laptop.jpg";
import laptop from "../../assets/laptop.webp";
import "./projects.scss";
import gsap from "gsap";
import { Project } from "../";
import projectImg1 from "../../assets/projectImg1.png";
import projectImg2 from "../../assets/projectImg2.png";

const Projects = () => {

    const projectsArr = [
        {
            projectNo: 1,
            projectName: "NEST",
            projectImage: projectImg1,
            projectDetails: "Helps refugees to find accommodation through various filtering options. In addition, anyone can become a host. This page also have direct chatting options between users."
        },
        {
            projectNo: 2,
            projectName: "React_Final_Project",
            projectImage: projectImg2,
            projectDetails: "fldsjl slfsld sdlfk"
        }

    ]

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                // scroller: ".App",
                trigger: ".laptop-container",
                start: "center 60%",
                end: "+=3000",
                scrub: true,
                id: ".laptop-containerimg",
                pin:true,
                pinSpacer:true,
                // horizontal: false,
                // markers: true,
            }
        })
        // .to(".project-container", { width: 600, height: 400 }, 0)
        // .to(".pin-spacer", { width: "100%" }, 0)
        .to(".laptop-container", {scale:3}, 0)
        .to(".projects",{scale:1.2},0)
        .to(".laptop-img", { width:"100%", left:0 },0)
        // .to(".project-container1", { left: "30%" }, 0)
        .to(".project-container1", { x: -200, opacity: 0 },1)
        .to(".project-container2", { opacity: 1 },2)
        .to(".project-container2", { x: -200, opacity: 0 },3)
        // .to(".project-container p", { fontSize:"14px" },0)
        // .to(".project-container h2", { fontSize:"16px" },0)



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
                            projectImage={project.projectImage}
                            projectDetails={project.projectDetails}
                        />
                    )}
                </div>
            </div> 
        </div>
    )
}

export default Projects;