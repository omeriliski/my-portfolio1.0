import projectImg from "../../assets/projectImg.png";
import "./project.scss";

const Project = ({projectNo, projectName, projectImagePath}) => {
    return (
        <div className={`project-container project-container${projectNo}`}>
            <h2>{projectName}</h2>
            <img className="project-img" src={projectImagePath} alt="" />
            <p>Project Beschreibung</p>
        </div>
    )
}

export default Project;