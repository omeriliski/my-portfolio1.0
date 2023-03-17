
import "./project.scss";

const Project = ({projectNo, projectName, projectImage, projectDetails}) => {
    return (
        <div className={`project-container project-container${projectNo}`}>
            <img className="project-img" src={projectImage} alt="" />
            <div className="text-container">
                <h2>{projectName}</h2>
                <p>{projectDetails}</p>
                <div className="link-container">
                    <a href="https://nest77.netlify.app/">Project Link</a>
                    <a href="">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Project;