import { useEffect } from "react";
import "./about.scss";
import myPicture2 from "../../assets/myPicture2.jpg";
import aboutMe from "../../assets/aboutMe.jpg"
import {gsap, Power1} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                // scroller: ".App",
                trigger: "#aboutMe-image",
                start: "top 600",
                end: "+=400",
                scrub: true,
                id: "#aboutMe-image",
                // pin:true,
                horizontal:false,
                // markers: true,
            }
        })
        .to("#aboutMe-image", { opacity:1, ease:Power1.easeIn },0)
        .to(".right-text-container h3",{opacity:1, ease:Power1.easeIn},0)
        .to(".right-text-container p",{opacity:1, ease:Power1.easeIn},1)
    }, []);
    return (
        <div className="about-container">
            <div class="left">
                <img id="aboutMe-image" src={aboutMe} alt="" />
            </div>
            <div class="right">
                <div class="right-text-container">
                    <h3>Who I am</h3>
                    {/* <h2>About me</h2> */}
                    <p>I enjoy programming as if i'm playing a computer game. I started code writing in High School
                        then i resumed my career as a computer teacher. I have not only experience in C#, MS SQL but also i
                        am a fast learner and always eager to learn new Technologies such as; React, React Native,
                        Vue.js,Node.js.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;