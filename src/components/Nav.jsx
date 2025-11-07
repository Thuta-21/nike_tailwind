import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/constants.index.js";
import { useState } from "react";
const Nav = () => {
  const [hide, setHide] = useState(true);
  const handleNav = () => {
    setHide(!hide);
  }
  return (
    <header className="padding-x py-8 sticky top-0 z-20 w-full bg-white-400 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={handleNav}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
      <div className={`flex justify-center ${hide && `hidden`} lg:hidden`}>
        <ul className="flex-1 flex flex-col absolute justify-center items-center gap-16 mt-20 ">
          {navLinks.map((item) => (
            <li key={item.label + '2'} >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black bg-gray-100 border border-black p-3 rounded-full shadow-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
