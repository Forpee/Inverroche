import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/lazy";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  function handleVid() {
    // vidRef.current.play();
    // vidRef.current.requestFullscreen()
    gsap.to(".video", { xPercent: 0, duration: 2 });
  }
  function handleVidClose() {
    gsap.to(".video", { xPercent: 100, duration: 2 });

    vidRef.current.pause();
  }
  gsap.registerPlugin(ScrollTrigger);
  const blackRef = useRef(null);
  const vidRef = useRef(null);
  const whiteRef = useRef(null);
  const scrollLineRef = useRef(null);
  const scrollLineRef2 = useRef(null);
  const graydientRef = useRef(null);
  const firstRef = useRef(null);
  useEffect(() => {
    gsap.set(".video", { xPercent: 100 });
  });
  useEffect(() => {
    ScrollTrigger.create({
      trigger: firstRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    gsap.to(blackRef.current, { duration: 3, xPercent: 100 });
    gsap.from(blackRef.current, { duration: 3, width: 0 });
    gsap.from(whiteRef.current, { duration: 3, width: 0 });
    gsap.from(scrollLineRef.current, { duration: 3, height: 0 });
    gsap.from(scrollLineRef2.current, { duration: 3, height: 0 });
    gsap.to(".image", { duration: 3, height: 0 });
  });
  return (
    <div ref={firstRef} className="h-screen flex relative">
      <div className="m-auto relative h-half w-half flex">
        <div
          ref={blackRef}
          className="absolute left-0 bg-black  w-quarter h-full  "
        ></div>
        <div
          ref={whiteRef}
          className="absolute left-0 bg-white w-quarter h-full "
        ></div>

        <h1 className="md:text-7xl sm:text-5xl text-4xl lg:text-8xl text-white m-auto z-10 mbm-d">
          Creative and passionate.
        </h1>
      </div>

      <div className="absolute bottom-16 rotate-90 transform flex">
        <p className="font-semibold text-xs sm:text-md m-auto px-4">SCROLL</p>
        <img src="/right-arrow.svg" alt="arrow" className="sm:h-16 h-8 "></img>
      </div>

      <div
        ref={scrollLineRef}
        className="absolute top-1/4  transform translate-y-1/2 h-48 border border-black border-r-0 border-b-0 border-t-0 left-20"
      ></div>
      <div
        ref={scrollLineRef2}
        className="absolute top-1/4  transform translate-y-1/2 h-48 border border-black border-r-0 border-b-0 border-t-0 right-20"
      ></div>
      <img
        src="/2.jpeg"
        className="absolute bottom-4 right-4 md:right-56 md:bottom-16 sm:h-48 h-16 md:h-72 z-image"
      ></img>
      <div className="absolute bottom-4 right-4 md:right-56 md:bottom-16 sm:h-48 h-16 w-16 md:w-72 sm:w-48 md:h-72 image bg-white "></div>
      <div
        onClick={handleVid}
        className="cursor-pointer absolute ball top-20 left-8 md:top-64 md:left-64 bg-black rounded-full flex pl-3"
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          size="4x"
          className="text-white m-auto"
        />
      </div>
      <div className="absolute h-screen w-screen top-0 left-0 bg-white video flex ">
        <button
          onClick={handleVidClose}
          className="absolute ball bottom-2 right-2 bg-black rounded-full flex "
        >
          <FontAwesomeIcon
            onClick={handleVidClose}
            icon={faTimes}
            size="3x"
            className="text-white m-auto z-999"
          />
        </button>
        <video ref={vidRef} className="inner-vid m-auto" controls>
          <source
            src="https://res.cloudinary.com/bobu/video/upload/v1623840580/wandi/Untitled_pdqq0o.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
