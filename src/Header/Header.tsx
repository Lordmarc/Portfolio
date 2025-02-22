import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";

function ShowMenu({ closeMenu }: { closeMenu: () => void }) {
  const linkHoverBg = "#D7EB9F";

  return (
    <div className="md:hidden">
      <ul className="text-xl font-medium text-center">
      {["home", "about","Skills", "project", "contact"].map(section => (
        <motion.li
        whileTap={{ backgroundColor: linkHoverBg }}
        className="w-full p-2  hover:bg-[#dde9be]"
        // Set default bg color
      >
        <a href={`${section}`} onClick={closeMenu}>{section.toUpperCase()}</a>
      </motion.li>
      ))}


      </ul>
    </div>
  );
}

export default function Header() {
  const [pindot, piNindot] = useState(false);

  function handlePindot() {
    piNindot((prev) => !prev);
    console.log(pindot);
  }

  function closeMenu(){
    piNindot(false);
  }

  return (
    <header id="home" className="header-bg p-4 w-full fixed z-50 shadow-xl">
      <div className=" flex mx-auto justify-between items-center">
        <h1 className="text-2xl font-bold">LORDMARC</h1>
       
          <div onClick={handlePindot} className="md:hidden cursor-pointer">
            <FontAwesomeIcon icon={pindot ? faClose : faBars} size="2xl" />
          </div>
        

        <ul className="hidden md:flex">
          <li className="link">
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li className="link">
            <a href="#about" className="">
              About Me
            </a>
          </li>
          <li className="link">
            <a href="#project">Project</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      {pindot && <ShowMenu closeMenu={closeMenu}/>}
    </header>
  );
}
