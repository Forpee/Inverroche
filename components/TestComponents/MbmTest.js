import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export default function MbmTest() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".content",

          start: () => "top -" + window.innerHeight * i,

          end: () => "+=" + window.innerHeight,
          scrub: 0.6,
        },
      });

      tl.fromTo(
        image,
        {
          height: () => {
            return "100%";
          },
        },
        {
          height: () => {
            return "0%";
          },
          ease: "none",
        }
      );
    });

    ScrollTrigger.create({
      trigger: ".content",

      pin: ".p-wrap",
      scrub: 1,
      start: () => "top top",
      end: () => "+=" + images.length * window.innerHeight,
    });
  });
  return (
    <div className="h-screen">
      <div className="flex h-screenx3 content">
        <div className="w-half bg-white relative  overflow-hidden h-screenx3">
          <div className="h-screen text-center m-auto items-center justify-center">
            1
          </div>
          <div className="h-screen text-center m-auto  items-center justify-center">
            2
          </div>
          <div className="h-screen text-center m-auto items-center justify-center">
            3
          </div>
        </div>
        <div className="bg-black w-half">
          <div className="p-wrap">
            <div className="panel blue"></div>
            <div className="panel red"></div>
          
            <div className="panel purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
