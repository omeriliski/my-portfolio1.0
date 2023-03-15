import { useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PanoramaContextType, PanoramaContext } from "../../context/context";
import { useTranslation } from "react-i18next";
import fensterAnfang from "../../assets/Grafische_Elemente/fenster-anfang.png";
import s1_img1 from "../../assets/herkules/Kapitel1/01_01_01.jpeg";
import s2_img1 from "../../assets/herkules/Kapitel2/01_02_01.png";
import s2_img2 from "../../assets/herkules/Kapitel2/01_02_02.png";
import s2_img3 from "../../assets/herkules/Kapitel2/01_02_03.png";
import s2_img4 from "../../assets/herkules/Kapitel2/01_02_04.png";
import s2_img5 from "../../assets/herkules/Kapitel2/01_02_05.png";
import s3_img1 from "../../assets/herkules/Kapitel3/01_03_01.png";
import s3_img2 from "../../assets/herkules/Kapitel3/01_03_02.png";
import s3_img3 from "../../assets/herkules/Kapitel3/01_03_03.png";
import s4_img1 from "../../assets/herkules/Kapitel4/01_04_01.png";
import s4_img2 from "../../assets/herkules/Kapitel4/01_04_02.png";
import s5_img1 from "../../assets/herkules/Kapitel5/01_05_01.png";
import s5_img2 from "../../assets/herkules/Kapitel5/01_05_02.png";
import s5_img3 from "../../assets/herkules/Kapitel5/01_05_03.png";
import s6_img1 from "../../assets/herkules/Kapitel6/01_06_01.jpg";
import s7_img1 from "../../assets/herkules/Kapitel7/01_07_01.png";
import s8_img1 from "../../assets/herkules/Kapitel8/01_08_01.png";
import { Pfeil1, Pfeil2, Kreis1, Kreis2, Kreis3, Kreis4, Next } from "..";

import name from "../../assets/Grafische_Elemente/name.png";
import abscheider from "../../assets/Grafische_Elemente/abscheider.png";

import "./1_herkules.scss";

export const Herkules = () => {
    const { t } = useTranslation();
    const { createScroller, circleAnim, trick, fadeInAnim, animatePictures, moveAnim } = useContext(PanoramaContext) as PanoramaContextType;
    gsap.registerPlugin(ScrollTrigger);

    

    // const ArrowAnimation = (pathNo1:number, pathNo2:number,pathNo3:number, trigger:any)=>{
    //     const paths = document.querySelectorAll("path");
    //     const l0 = paths[pathNo1]?.getTotalLength();
    //     const l1 = paths[pathNo2]?.getTotalLength();
    //     const l2 = paths[pathNo3]?.getTotalLength();
    //     gsap.set(paths[pathNo1], { strokeDasharray: l0});
    //     gsap.set(paths[pathNo2], { strokeDasharray: l1});
    //     gsap.set(paths[pathNo3], { strokeDasharray: l2});

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             scroller: "#modal-body",
    //             trigger: trigger,
    //             // start: 'top center',
    //             start: `top 75%`,
    //             end: `+=800`,
    //             scrub: true,
    //             horizontal: true,
    //             markers: true
    //         }
    //     })
    //     .fromTo(paths[pathNo1], { strokeDashoffset: l0 },{strokeDashoffset: 0, duration: 10,})
    //     .fromTo(paths[pathNo2], { strokeDashoffset: l1 },{strokeDashoffset: 0, duration: 10,})
    //     .fromTo(paths[pathNo3], { strokeDashoffset: l2 },{strokeDashoffset: 0, duration: 10,})

    //     return tl;
    // }
    useEffect(() => {
        //text anim
        gsap.timeline()
        .from(".s1 .kapitel-titel", { opacity: 0, duration: 2 },0)
        .from(".s1 .kapitel-subtitel1", { opacity: 0, duration: 2 },0)
        .from(".s1 .p1", { opacity: 0, duration: 2 },1)
        .from(".s1 .kapitel-bildunterschrift", { opacity: 0, duration: 2 },1);
        
        gsap.timeline({
            scrollTrigger: {
                scroller: "#modal-body",
                trigger: ".s1 .kapitel-titel",
                start: "top center",
                end: "+=600",
                scrub: true,
                id: "s1 .img1",
                horizontal: true,
                // markers: true,
            }
        })
        .to(".s1 .kapitel-titel",{x:-100},0)
        .to(".s1 .kapitel-subtitel1",{x:-100},0)
        .to(".s1 .p1",{x:-100},0)
        .to(".s1 .kapitel-bildunterschrift",{x:-100},0)
    }, [])

    useEffect(() => {
        let container = document.getElementsByClassName("body-elements-container")[0] as HTMLDivElement;
        // given width to the container, because of mobile scrolling 
        // scrollMode: 'native',
        container.style.width="27950px";
        const modalBody = document.getElementById("modal-body");
        // modalBody!.style.width="27950px";
        modalBody!.scrollLeft=0;
        createScroller();

        

            console.log('container.scrollWidth', container.scrollWidth)
            // animatePictures("friedrichII-a", `top -${container.offsetWidth / 15}px`, `=${container.offsetWidth / 7}px`, "92_frames", 43);

            //---------section 1 Animations---------------

            animatePictures("92_frames/drawing",50, 43, "friedrichII-a",1158, 770);
            
            //width: 462px; height: 514px;

            // circle anim
            const paths = document.querySelectorAll("path");
            
            // !!! here 0 is the number of path (path is the element in svg files). 
            // All circle and arrow svg animations are created depending on paths and path numbers.
            circleAnim(0,  `top 50%`,`+=800`);

            //---------section 2 Animations---------------

            //Arrows and Circle anim
            const l0 = paths[1]?.getTotalLength();
            const l1 = paths[3]?.getTotalLength();
            const l2 = paths[5]?.getTotalLength();
            const lengthOfCircle2 = paths[6]?.getTotalLength();

            gsap.set(paths[1], { strokeDasharray: l0 });
            gsap.set(paths[3], { strokeDasharray: l1 });
            gsap.set(paths[5], { strokeDasharray: l2 });
            gsap.set(paths[6], { strokeDasharray: lengthOfCircle2 });

            gsap.timeline({
                scrollTrigger: {
                    scroller: "#modal-body",
                    trigger: paths[1],
                    // start: 'top center',
                    start: `top 90%`,
                    end: `+=1000`,
                    scrub: true,
                    horizontal: true,
                    // markers: true
                }
            })
                // Vorschlag
                // .from(".s2 .img1", { duration: 50, y: -700, width:10, height:10 })
                .from(".s2 .img1", { duration: 50, y: -700 })
                .fromTo(paths[1], { strokeDashoffset: l0 }, { strokeDashoffset: 0, duration: 20, })
                .fromTo(paths[3], { strokeDashoffset: l1 }, { strokeDashoffset: 0, duration: 20, })
                .fromTo(paths[5], { strokeDashoffset: l2 }, { strokeDashoffset: 0, duration: 20, })
                .fromTo(paths[6], { strokeDashoffset: lengthOfCircle2 }, { strokeDashoffset: 0, duration: 50 })

            // 3 picture anim
            gsap.timeline({
                scrollTrigger: {
                    scroller: "#modal-body",
                    trigger: '.s2 .img2',
                    // start: 'top center',
                    start: `top 75%`,
                    end: `+=1000`,
                    scrub: true,
                    horizontal: true,
                    // markers: true
                }
            })
                .from(".s2 .img2", { duration:50, y: -600, opacity: 0 })
                .from(".s2 .img3", { duration:50, y: 600, opacity: 0 })
                .from(".s2 .img4", { duration:50, y: -600, opacity: 0 })

            //---------section 3 Animations---------------

            // big coin
            moveAnim(".s3 .img1",'top 90%', '+=30%', {duration: 10, y: -800})

            //---------section 4 Animations---------------
            // Ernst I. img
            fadeInAnim(".s4 .img1", "top 90%", "+=800");

            // circleAnim(7);
            fadeInAnim(".s4 .crimsonPro3", "top 75%", "+=800");
            fadeInAnim(".s4 .p4", "top 75%", "+=800");

            // Friedrich I. img
            fadeInAnim(".s4 .img2", "top 90%", "+=800");

            //---------section 5 Animations---------------
            //"Gegenstände aus der Kunstkammer" images
            fadeInAnim(".s5 .img1", "top 90%", "+=700");
            fadeInAnim(".s5 .img2", "top 90%", "+=700");
            fadeInAnim(".s5 .img3", "top 90%", "+=700");

            //---------section 7 Animations---------------
            const lengthOfCircle4 = paths[8]?.getTotalLength();
            gsap.set(paths[8], { strokeDasharray: lengthOfCircle4 });
            gsap.set(paths[9], { strokeDasharray: l0 });
            gsap.set(paths[11], { strokeDasharray: l1 });
            gsap.set(paths[13], { strokeDasharray: l2 });

            gsap.set(paths[14], { strokeDasharray: l0 });
            gsap.set(paths[16], { strokeDasharray: l1 });
            gsap.set(paths[18], { strokeDasharray: l2 });
            gsap.timeline({
                scrollTrigger: {
                    scroller: "#modal-body",
                    trigger: paths[8],
                    // start: 'top center',
                    start: `top 50%`,
                    end: `+=1200`,
                    scrub: true,
                    horizontal: true,
                    // markers: true
                }
            })
                .fromTo(paths[8], { strokeDashoffset: lengthOfCircle4 }, { strokeDashoffset: 0, duration: 10 })
                .fromTo(paths[9], { strokeDashoffset: l0 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[11], { strokeDashoffset: l1 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[13], { strokeDashoffset: l2 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[14], { strokeDashoffset: l0 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[16], { strokeDashoffset: l1 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[18], { strokeDashoffset: l2 }, { strokeDashoffset: 0, duration: 10, })

            //---------section 8 Animations---------------
            gsap.set(paths[19], { strokeDasharray: l0 });
            gsap.set(paths[21], { strokeDasharray: l1 });
            gsap.set(paths[23], { strokeDasharray: l2 });
            gsap.set(paths[24], { strokeDasharray: l0 });
            gsap.set(paths[26], { strokeDasharray: l1 });
            gsap.set(paths[28], { strokeDasharray: l2 });

            fadeInAnim(".s8 .img1", "top 85%", "+=500");

            gsap.timeline({
                scrollTrigger: {
                    scroller: "#modal-body",
                    trigger: paths[19],
                    // start: 'top center',
                    start: `top 80%`,
                    end: `+=500`,
                    scrub: true,
                    horizontal: true,
                    // markers: true
                }
            })
                .fromTo(paths[19], { strokeDashoffset: l0 }, { strokeDashoffset: 0, duration: 10, },0)
                .fromTo(paths[21], { strokeDashoffset: l1 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[23], { strokeDashoffset: l2 }, { strokeDashoffset: 0, duration: 10, })
                .from(".s8 .kapitel-quote1", { duration: 50, opacity: 0 },0)

                gsap.timeline({
                    scrollTrigger: {
                        scroller: "#modal-body",
                        trigger: paths[24],
                        // start: 'top center',
                        start: `top 60%`,
                        end: `+=500`,
                        scrub: true,
                        horizontal: true,
                        // markers: true
                    }
                })
                .fromTo(paths[24], { strokeDashoffset: l0 }, { strokeDashoffset: 0, duration: 10, },1)
                .fromTo(paths[26], { strokeDashoffset: l1 }, { strokeDashoffset: 0, duration: 10, })
                .fromTo(paths[28], { strokeDashoffset: l2 }, { strokeDashoffset: 0, duration: 10, })
                .from(".s8 .kapitel-quote2", { duration: 50, opacity: 0 },1)
    }, [])


    return (
        // s:section, t:text
        //---------section1----------
        <div className="herkules">
            {/* <div className="range-container">
                // <Range/>
            </div> */}
            <div className="section s1">
                <img className="img0" src={fensterAnfang} alt="" />
                <h1 className="fenster-titel">{t("Herkules.s1.t1")}</h1>
                <h2 className="fenster-subtitel">{t("Herkules.s1.t2")}</h2>
                <h2 className="kapitel-titel">{t("Herkules.s1.t3")}</h2>
                <h3 className="kapitel-subtitel kapitel-subtitel1">{t("Herkules.s1.t4")}</h3>
                <p className="kapitel-body p1">{t("Herkules.s1.t5")}</p>
                <p className="kapitel-bildunterschrift">{t("Herkules.s1.t6")}</p>
                <img className="img1" src={s1_img1} alt="" />
                <div className="canvas-container">
                    <canvas id="friedrichII-a" />
                </div>
                <img className="img2" src={name} alt="" />
                <h2 className="kapitel-name-einer-person">{t("Herkules.s1.t7")}</h2>
                <h3 className="kapitel-subtitel kapitel-subtitel2">{t("Herkules.s1.t8")}</h3>
                <p className="kapitel-body p2">{t("Herkules.s1.t9")}</p>
                <p className="crimsonPro1 p3">{t("Herkules.s1.t10")}</p>
                <div className="kreis-container">
                    <Kreis1 />
                </div>
                <div className="p4">
                    <span className="kapitel-body">{t("Herkules.s1.t11")}</span>
                    <span className="kapitel-bodyBold">{t("Herkules.s1.t12")}</span>
                    <span className="kapitel-body">{t("Herkules.s1.t13")}</span>
                </div>
                <img className="abscheider1" src={abscheider} alt="" />
            </div>
            {/* ---------section2---------- */}
            <div className="section s2">
                <h2 className="kapitel-titel kapitel-titel1">{t("Herkules.s2.t1a")}</h2>
                <h2 className="kapitel-titel kapitel-titel2">{t("Herkules.s2.t1b")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s2.t2")}</p>
                <div className="p2">
                    <span className="kapitel-body">{t("Herkules.s2.t3")}</span>
                    <span className="kapitel-bodyBold">{t("Herkules.s2.t4")}</span>
                    <span className="kapitel-body">{t("Herkules.s2.t5")}</span>
                </div>
                <div className="arrow-container">
                    <Pfeil1 />
                </div>
                <img className="img1" src={s2_img1} alt="" />
                <p className="kapitel-bildunterschrift kapitel-bildunterschrift1 blue">{t("Herkules.s2.t6")}</p>
                <div className="kreis-container">
                    <Kreis2 />
                </div>
                <div className="p3">
                    <p className="smallTextItalicBlue crimsonPro2 peader">{t("Herkules.s2.t7")}</p>
                    <p className="smallTextItalicBlue crimsonPro2">{t("Herkules.s2.t8")}</p>
                    <p className="smallTextItalicBlue crimsonPro2 peader">{t("Herkules.s2.t9")}</p>
                    <p className="smallTextItalicBlue crimsonPro2">{t("Herkules.s2.t10")}</p>
                </div>
                <img className="img5" src={s2_img5} alt="" />
                <h2 className="kapitel-titel kapitel-titel3">{t("Herkules.s2.t11")}</h2>
                <div className="p4">
                    <span className="kapitel-body">{t("Herkules.s2.t12")}</span>
                    <span className="kapitel-bodyBold">{t("Herkules.s2.t13")}</span>
                    <span className="kapitel-body">{t("Herkules.s2.t14")}</span>
                </div>
                <p className="kapitel-body p5">{t("Herkules.s2.t15")}</p>
                <p className="kapitel-bildunterschrift kapitel-bildunterschrift2">{t("Herkules.s2.t16")}</p>
                <img className="img2" src={s2_img2} alt="" />
                <img className="img3" src={s2_img3} alt="" />
                <img className="img4" src={s2_img4} alt="" />
                <img className="abscheider2" src={abscheider} alt="" />
            </div>
            {/* ---------section3---------- */}
            <div className="section s3">
                <img className="img3" src={s3_img3} alt="" />
                <img className="img2" src={s3_img2} alt="" />
                <h2 className="kapitel-titel">{t("Herkules.s3.t1")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s3.t2")}</p>
                <p className="kapitel-body p2">{t("Herkules.s3.t3")}</p>
                <p className="kapitel-bildunterschrift blue" id="p3">{t("Herkules.s3.t4")}</p>
                <img className="img1" src={s3_img1} alt="" />
                <p className="kapitel-body p3">{t("Herkules.s3.t5")}</p>
                <img className="abscheider3" src={abscheider} alt="" />
            </div>
            {/* ---------section4---------- */}
            <div className="section s4">
                <h2 className="kapitel-titel">{t("Herkules.s4.t1")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s4.t2")}</p>
                <img className="img1" src={s4_img1} alt="" />
                <img className="name1" src={name} alt="" />
                <h2 className="kapitel-name-einer-person kapitel-name-einer-person1">{t("Herkules.s4.t3")}</h2>
                <h3 className="kapitel-subtitel kapitel-subtitel1">{t("Herkules.s4.t4")}</h3>
                <h3 className="kapitel-subtitel kapitel-subtitel2">{t("Herkules.s4.t5")}</h3>
                <p className="kapitel-body p2">{t("Herkules.s4.t6")}</p>
                <div className="kreis-container">
                    <Kreis1 />
                </div>
                <p className="crimsonPro3">{t("Herkules.s4.t7")}</p>
                <p className="kapitel-body p4">{t("Herkules.s4.t8")}</p>
                <img className="img2" src={s4_img2} alt="" />
                <img className="name2" src={name} alt="" />
                <h2 className="kapitel-name-einer-person kapitel-name-einer-person2">{t("Herkules.s4.t9")}</h2>
                <h3 className="kapitel-subtitel kapitel-subtitel3">{t("Herkules.s4.t10")}</h3>
                <h3 className="kapitel-subtitel kapitel-subtitel4">{t("Herkules.s4.t11")}</h3>
                <img className="abscheider4" src={abscheider} alt="" />
            </div>
            {/* ---------section5---------- */}
            <div className="section s5">
                <h2 className="kapitel-titel">{t("Herkules.s5.t1")}</h2>
                <img className="img1" src={s5_img1} alt="" />
                <div className="subtitle-container1">
                    <p className="kapitel-bildunterschrift blue picture-subtitle" >{t("Herkules.s5.t2")}</p>
                    <p className="kapitel-bildunterschrift blue picture-subtitle" id="picture-subtitle">{t("Herkules.s5.t3")}</p>
                </div>
                <img className="img2" src={s5_img2} alt="" />
                <div className="subtitle-container2">
                    <p className="kapitel-bildunterschrift blue picture-subtitle" id="picture-subtitle" >{t("Herkules.s5.t4")}</p>
                </div>
                <img className="img3" src={s5_img3} alt="" />
                <div className="subtitle-container3">
                    <p className="kapitel-bildunterschrift blue picture-subtitle">{t("Herkules.s5.t5")}</p>
                </div>
                <img className="abscheider5" src={abscheider} alt="" />
            </div>
            {/* ---------section6---------- */}
            <div className="section s6">
                <img className="img1" src={s6_img1} alt="" />
                <h2 className="kapitel-titel">{t("Herkules.s6.t1")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s6.t2")}</p>
                <p className="kapitel-bildunterschrift">{t("Herkules.s6.t3")}</p>
                <img className="abscheider6" src={abscheider} alt="" />
            </div>
            {/* ---------section7---------- */}
            <div className="section s7">
                <h2 className="kapitel-titel">{t("Herkules.s7.t1")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s7.t2")}</p>
                <div className="kreis-container">
                    <Kreis3 />
                </div>
                <p className="kapitel-quote">{t("Herkules.s7.t3")}</p>
                <p className="kapitel-body blue p2">{t("Herkules.s7.t4")}</p>
                <div className="arrow-container1">
                    <Pfeil1 />
                </div>
                <img className="img1" src={s7_img1} alt="" />
                <div className="arrow-container2">
                    <Pfeil1 />
                </div>
                <p className="kapitel-body blue p3">{t("Herkules.s7.t5")}</p>
                <img className="abscheider7" src={abscheider} alt="" />
            </div>
            {/* ---------section8---------- */}
            <div className="section s8">
                <h2 className="kapitel-titel">{t("Herkules.s8.t1")}</h2>
                <p className="kapitel-body p1">{t("Herkules.s8.t2")}</p>
                <p className="kapitel-body p2">{t("Herkules.s8.t3")}</p>
                <img className="img1" src={s8_img1} alt="" />
                <div className="arrow-container1">
                    <Pfeil2/>
                </div>
                <span className="kapitel-quote kapitel-quote1">{t("Herkules.s8.t4")}</span>
                <div className="arrow-container2">
                    <Pfeil1/>
                </div>
                <span className="kapitel-quote kapitel-quote2">{t("Herkules.s8.t5")}</span>
                <p className="kapitel-body p3">{t("Herkules.s8.t6")}</p>
                <p className="kapitel-body p4">{t("Herkules.s8.t7")}</p>
                <div className="next-container">
                    <Next/>
                </div>
                <div className="bildnachweise">
                    <h3 className="fußnoteUberschrift">{t("Herkules.s8.t9")}</h3>
                    <p className="fußnoteText">{t("Herkules.s8.t10")}</p>
                    <p className="fußnoteText">{t("Herkules.s8.t11")}
                        <a
                            className="braun"
                            target="_blank"
                            href="https://commons.wikimedia.org/wiki/File:Fotothek_df_tg_0005324_Architektur_%5E_Wasserf%C3%B6rderung_%5E_Wasserkunst_%5E_Park.jpg?uselang=de">
                            https://commons.wikimedia.org/wikiFile:Fotothek_df_tg_0005324_Architektur_%5E
                            _Wasserförderung_%5E_Wasserkunst_%5E_Park.jpg?uselang=de
                        </a>
                    </p>
                    <p className="fußnoteText">{t("Herkules.s8.t12")}</p>
                    <p className="fußnoteText">{t("Herkules.s8.t13")}</p>
                    <p className="fußnoteText">{t("Herkules.s8.t14")}</p>
                </div>
            </div>
        </div >
    )
}