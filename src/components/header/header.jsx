import "./header.scss";
import myPicture from "../../assets/myp1.jpg"
import hand from "../../assets/hand.png"
// import background from "../../assets/backgroun.gif"

const Header = () => {
    return (
        <div className="header-container">
            <div className="opacity-helper-div">
                {/* <img id="background" src={background} alt="" /> */}
                <div class="left-header-container">
                    <div className="text-container">
                        {/* <h3>Hi,<img src={hand} alt="" /> I'm</h3> */}
                        <h1>Ömer Iliski</h1>
                        <h2>Full Stack Web Developer</h2>
                        <p>I’m a Full Stack Web Developer and love coding</p>
                    </div>

                    {/* <!-- <a class="my-github" href="https://github.com/omeriliski">My GitHub</a> --> */}
                </div>
                <div class="header-img-container">
                    <img id="my-picture1" src={myPicture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;