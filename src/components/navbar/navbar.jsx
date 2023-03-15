import "./navbar.scss";

const Navbar = () => {
    
    
    return (
        <div className="navbar-container">
            <div className="left-navbar">
                <a id="name" href="#">Ömer Iliski</a>
                <div id="name-underline"></div>
            </div>
            <div className="right-navbar">
                <div className="link-container">
                    <a id="about" href="#">About</a>
                    <div id="about-underline"></div>
                </div>
                <div className="link-container">
                    <a id="projects" href="#">Projects</a>
                    <div id="projects-underline"></div>
                </div>
                <div className="link-container">
                    <a id="contact" href="#">Contact</a>
                    <div id="contact-underline"></div>
                </div>
                <div className="link-container">
                    <a  id="useful-resources" href="#">Useful Resources</a>
                    <div id="useful-resources-underline"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;