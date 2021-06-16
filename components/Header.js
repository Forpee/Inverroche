import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
export default function Header() {
  const openRef = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => {
    function animationFx() {
      anim.reversed() ? anim.play() : anim.reverse();
    }
    var anim = gsap.timeline({ pause: true, reversed: true });
    anim
      .to("#navWrap", { opacity: 1, display: "block", duration: 0.5 })
      .to(".navBars", { duration: 0.3, opacity: 0 })
      .to(".navClose", { duration: 0.3, display: "block", opacity: 1 })
      .from(".menu", { duration: 0.5, y: 30, opacity: 0 })
      .from(".social", { duration: 0.5, opacity: 0 });

    closeRef.current.addEventListener("click", animationFx);
    openRef.current.addEventListener("click", animationFx);
  });
  return (
    <div className="flex w-screen px-32 py-8 fixed top-0 justify-between z-50">
      <div className='flex'>
        <h1 className="text-2xl">Inverroche_</h1>
       
      </div>

      <div ref={closeRef} className="cursor-pointer z-50 opacity-0 navClose">
        <FontAwesomeIcon className="text-white" size="lg" icon={faTimes} />
      </div>
      <div ref={openRef} className="cursor-pointer float-right navBars">
        <FontAwesomeIcon size="lg" icon={faBars} />
      </div>

      <div
        id="navWrap"
        className="text-white px-32 hidden min-h-screen w-full h-full mbm-s bg-black opacity-0 absolute top-0 left-0 overflow-hidden z-50 "
      >
        <div className="container menu relative w-full my-auto mx-0 box-border ">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Journal</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faCodepen} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faBehance} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
