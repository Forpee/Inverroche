import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Test() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".content:not(.initial)", { autoAlpha: 0 });
    var headlines = gsap.utils.toArray(".text");
    var totalDuration = 1000;
    var singleDuration = totalDuration / headlines.length;
    const lineTimeline = gsap.timeline();

    ScrollTrigger.create({
      trigger: ".pin-up",
      start: "top top",
      end: "+=" + totalDuration,
      pin: true,
      scrub: true,
      animation: lineTimeline,
    });

    lineTimeline
      .to(".sideline", { duration: 1 }, 0)
      .to(".sideline", { duration: 0.9, scaleY: 1, ease: "none" }, 0);

    headlines.forEach((elem, i) => {
      const smallTimeline = gsap.timeline();
      const gradTimeline = gsap.timeline();
      const content = document.querySelector(".content-wrap");
      const relevantContent = content.querySelector("div.content-" + i);
      const gradContent = document.querySelector(".grad-" + i);

      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top -=" + singleDuration * i,
        end: "+=" + singleDuration,
        animation: smallTimeline,
        toggleActions: relevantContent.classList.contains("remaining")
          ? "play none play reverse"
          : "play reverse play reverse",
      });
      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top -=" + singleDuration * i,
        end: "+=" + singleDuration,
        animation: gradTimeline,
        scrub: 1,
      });
      //toglle actions : on ENter OnLeave OnEnterBack onLeaveBack
      gradTimeline.to(gradContent, { yPercent: -270, duration: 2 });
      smallTimeline
        .to(
          elem,
          {
            duration: 0.25,
            color: "#000",
            scale: 1.7,
            ease: "none",
            fontWeight: 900,
          },
          0
        )
        .to(relevantContent, { autoAlpha: 1 }, 0.125);
    });

    // -------------------------------------------------------------------------------------------------------------
  });

  return (
    <div>
      <div className="spacer flex justify-center items-center h-screen-0-2 ">
        <span className="m-auto">Start Scrolling!</span>
      </div>

      <div className="wrapper relative">
        <div className="pin-up w-screen h-screen flex bg-white ">
          <div className="w-half bg-white h-full relative">
            <img src="/gray.jpg" className="h-120 absolute" />
            <div className="text-wrap h-screen w-96  flex flex-col justify-center items-start bg-white text-gray-700 ml-40">
              <div className="text">Ux Research</div>
              <div className="text my-16">Design</div>
              <div className="text">Build</div>\
            </div>
            <div className="absolute top-72 left-0 h-4 border-l-0 border-4 border-white w-48 bg-transparent"></div>
            <div className="absolute left-48 bottom-48 w-80">
              <p className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="sideline"></div>
          <div className="w-half bg-black h-full overflow-hidden relative ">
            <img
              src="/bnw.png"
              className="absolute h-96 z-10 left-1/4 transform translate-y-1/2"
            />
            <div className="absolute w-64 h-96 grad-0 mbm-s bottom-0   z-10"></div>
            <div className="absolute w-64 h-96 grad-1 mbm-s bottom-0 right-0  z-10"></div>
            <div className="absolute w-64 h-96 grad-2 mbm-s bottom-0 right-0  z-10"></div>
            <div className="content-wrap h-screen w-full  relative rounded bg-gray-400   ">
              <div className="content  content-0 initial">
                <h1 className="transform -rotate-90  outline-text mbm-d z-30">
                  UX Research
                </h1>
              </div>
              <div className="content content-1">
                <h1 className="transform -rotate-90  outline-text ">Design</h1>
              </div>
              <div className="content content-2 remaining">
                <h1 className="transform -rotate-90  outline-text mbm-d">
                  Build
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
