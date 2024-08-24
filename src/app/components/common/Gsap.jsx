"use client"
import React, { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.fromTo(".navBar", {
                delay: 1.5,
                y: -200,
                duration: 1,
                stagger: 0.1,
            }, {
                y: 0,
                delay: 1.5,
                duration: 1,
                stagger: 0.1,
            });
        });

        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".Light", {
                delay: 1.5,
                x: -500,
                duration: 1,
            });
            gsap.from(".Herbert", {
                delay: 1.5,
                x: 900,
                duration: 1,
            });
            gsap.from(".hello", {
                x: 500,
                delay: 1.5,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Landscape",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".Complex", {
                x: -700,
                delay: 1.5,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Landscape",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });

        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".card", {
                x: -700,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Empowering",
                    start: "top top",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".text", {
                x: 900,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Empowering",
                    start: "top top",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });

        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".heading", {
                x: -400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".para", {
                x: 400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".img", {
                zoom: "0",
                opacity: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });

        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".image", {
                x: -400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Vision",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".Paragraph", {
                x: 400,
                opacity: 0,
                duration: 2,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Vision",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });

        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".left", {
                x: -900,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".faq",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".right", {
                x: 900,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".faq",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });
        return () => aot.revert();
    }, []);
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".bottom", {
                y: 900,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".Visa",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        });
        return () => aot.revert();
    }, []);
    return (
        <></>
    )
}

export default Gsap