import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faFutbol } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="flex w-screen px-4 sm:px-32 py-8 fixed top-0 justify-between z-50">
      <div className="flex">
      
        <h1 className="text-2xl">Inverroche_</h1>
      </div>

      <div  className="cursor-pointer float-right navBars">
        <FontAwesomeIcon size="lg" icon={faBars} />
      </div>

      <div
        id="navWrap"
        className="text-white px-32 hidden min-h-screen w-full h-full mbm-s bg-black opacity-0 absolute top-0 left-0 overflow-hidden z-50 "
      ></div>
    </div>
  );
}
