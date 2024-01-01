import LOGO from "../../assets/ICONS/Outline/LOGO.png";
import search from "../../assets/ICONS/Outline/search.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Nav />
      <div className="flex items-start justify-center gap-6 py-2">
        <img src={LOGO} className="hidden lg:flex"></img>
        <div className="w-[752px] mt-2 h-12 rounded border border-blue-300 justify-between items-center inline-flex">
          <input
            type="text"
            className="text-zinc-400 text-xl font-normal font-['Roboto'] leading-normal w-full h-full"
          />
          <div className="w-10  self-stretch p-2.5 bg-sky-800 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-1.5 flex">
            <img src={search} className=" w-fit h-fit"></img>
          </div>
        </div>
      </div>
     
      <p className="flex items-center justify-center">
        Take the good times on the go, get the&nbsp;
        <Link to='/app'><button className="text-orange-500 text-2xl font-500">APP&nbsp;</button></Link>{" "}
        now!!!
      </p>
    </div>
  );
}