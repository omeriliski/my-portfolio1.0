import { useEffect } from "react";
import gsap from "gsap";
import "./cursorMove.scss"

const CursorMove = () => {


    const moveCursor = (e) => {
        const pointer = document.querySelector('#pointer');
        const cursorRounded = pointer;
        const mouseY = e.pageY;
        const mouseX = e.pageX;
        console.log('mouseY :>> ', mouseY);
        console.log('mouseX :>> ', mouseX);
        console.log("------------------------------");
        cursorRounded.style.transform = `translate3d(${mouseX-5 }px, ${mouseY-5}px, 0)`;
    }
    const myHover = (element, width) => {
        const pointer = document.querySelector('#pointer');
        const link = document.querySelector(`#${element}`);

        document.addEventListener('mousemove', (event) => {
            // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
            const linkRect = link.getBoundingClientRect();

            if (event.clientX >= linkRect.left && event.clientX <= linkRect.right && event.clientY >= linkRect.top && event.clientY <= linkRect.bottom) {
                gsap.to(`#${element}-underline`, { width });
            } else {
                gsap.to(`#${element}-underline`, { width: 0 });
            }
        });
    }

    const moveCursor2 = () => {
        gsap.set("#pointer", { xPercent: -50, yPercent: -50 });

        const pointer = document.querySelector("#pointer");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = .7;

        const xSet = gsap.quickSetter(pointer, "x", "px");
        const ySet = gsap.quickSetter(pointer, "y", "px");

        window.addEventListener("mousemove", e => {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
        });

        gsap.ticker.add(() => {

            // adjust speed for higher refresh monitors
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });
    }

    const moveCursor3 = () => {
        let cursor = document.querySelector('.cursor');
        let cursorScale = document.querySelectorAll('.cursor-scale');
        let mouseX = 0;
        let mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    }
                })
            }
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        })

        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                cursor.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });

            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
            });
        })
    }

    useEffect(() => {
        // eventlistener for mouse cursor
        // window.addEventListener('mousemove', moveCursor);
        moveCursor2();
        myHover("name", 75);
        myHover("about", 43);
        myHover("projects", 55);
        myHover("contact", 55);
        myHover("useful-resources", 120);

        // moveCursor2();


    }, []);



    return (
        <div id="pointer"></div>
    );
}

export default CursorMove;