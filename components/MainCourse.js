import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
export default function MainCourse() {
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
      <div className="wrapper relative">
        <div className="pin-up w-screen h-screen flex bg-white ">
          <div className="w-half bg-white h-full relative">
            <img src="/gray.jpg" className=" h-72 sm:h-120 absolute" />
            <div className="text-wrap h-screen w-96  flex flex-col justify-center items-start bg-white text-gray-700 ml-8 sm:ml-24 md:ml-40">
              <div className="text ">Distillery</div>
              <div className="text my-12 sm:my-16">Fynbos</div>
              <div className="text ">Botanicals</div>
            </div>
            <div className="absolute sm:top-40 top-32 md:top-72 left-0 h-4 border-l-0 border-4 border-white w-48 bg-transparent"></div>
            <div className="absolute left-4 md:left-48 bottom-8 md:bottom-48 w-3/4 sm:w-80">
              <p className="font-semibold text-xs">
                Inverroche uses unique ingredients to create luxury spirits —
                fynbos found nowhere else but within the dunes and mountain
                regions of the Cape floral kingdom.
              </p>
            </div>
          </div>
          <div className="sideline"></div>
          <div className="w-half bg-black h-full overflow-hidden relative ">
            <img
              src="/bnw.png"
              className="absolute h-96 sm:visible invisible z-10 left-1/4 transform translate-y-1/2"
            />
            <div className="absolute w-64 h-96 grad-0 mbm-s bottom-0   z-10"></div>
            <div className="absolute w-64 h-96 grad-1 mbm-s bottom-0 right-0  z-10"></div>
            <div className="absolute w-64 h-96 grad-2 mbm-s bottom-0 right-0  z-10"></div>
            <div className="content-wrap h-screen w-full  relative rounded bg-gray-400   ">
              <div className="content  content-0 initial">
                <h1 className="transform -rotate-90  outline-text mbm-d z-30">
                  Distillery
                </h1>
              </div>
              <div className="content content-1">
                <h1 className="transform -rotate-90 mbm-d outline-text ">
                  Fynbos
                </h1>
              </div>
              <div className="content content-2 remaining">
                <h1 className="transform -rotate-90  outline-text mbm-d">
                  Botanicals
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
