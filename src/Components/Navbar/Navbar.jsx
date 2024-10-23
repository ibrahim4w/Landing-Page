import { useState } from "react";
import logo from "./../../assets/imgs/logo.png";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);
  const [bgColor, setBgColor] = useState("");

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor("bg-black");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative h-[80px]">
      <div className="w-[85%] md:w-[95%] h-[80px] p-5 mx-auto text-center flex items-center justify-between">
        <div className="headerLogo">
          <a href="#home">
            <img src={logo} className="w-20 h-auto" alt="Logo" />
          </a>
        </div>
        <div
          ref={sideNavRef}
          className={`headerNav bg-black  text-white p-9 fixed top-0 right-0 w-[280px] h-screen z-[10000] overflow-auto ${
            isOpen
              ? "translate-x-0 duration-700"
              : "translate-x-full duration-700"
          }`}
        >
          <div className="text-start">
            <div
              onClick={toggleSideNav}
              className="flex justify-between items-center mb-12 mt-2 cursor-pointer"
            >
              <h3 className="text-xs text-[#39b54a]">Navigation</h3>
              <span>
                <i className="fa-solid fa-xmark" />
              </span>
            </div>
            {/* NavLinks */}
            <ul className="headerNavList mb-8">
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  className="scroll-smooth leading-[2rem]"
                  href="#home"
                  title="home"
                >
                  Home
                </a>
              </li>
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  href="#about"
                  title="about"
                  className="scroll-smooth leading-[3rem]"
                >
                  About
                </a>
              </li>
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  href="#services"
                  title="services"
                  className="scroll-smooth leading-[3rem]"
                >
                  Services
                </a>
              </li>
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  href="#work"
                  title="work"
                  className="scroll-smooth leading-[3rem]"
                >
                  Work
                </a>
              </li>
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  className="scroll-smooth leading-[3rem]"
                  href="#clients"
                  title="clients"
                >
                  Clients
                </a>
              </li>
              <li
                className={`transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0"
                } transition-all duration-700`}
              >
                <a
                  className="scroll-smooth leading-[3rem]"
                  href="#contact"
                  title="contact"
                >
                  Contact US
                </a>
              </li>
            </ul>
            <p
              className={`text-white text-opacity-50 mb-8 text-xs leading-relaxed ${
                isOpen
                  ? "translate-x-0 opacity-100 delay-200"
                  : "translate-x-12 opacity-0"
              } transition-all duration-700 `}
            >
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum
              <span className="text-white text-opacity-75 duration-300 hover:text-white hover:duration-300">
                <a href="#home">voluptatem</a>
              </span>
              porro iusto sequi veritatis libero enim. Iusto id suscipit
              veritatis neque reprehenderit.
            </p>
            {/* Socail Media */}
            <ul
              className={`headerNavSocail flex items-center ${
                isOpen
                  ? "translate-x-0 opacity-100 delay-200"
                  : "translate-x-12 opacity-0"
              } transition-all duration-700 `}
            >
              <li className="text-white text-opacity-50 mr-3 duration-300 hover:text-white hover:duration-300">
                <a href="#home">
                  <i className="fa-brands fa-facebook-f text-xl"></i>
                </a>
              </li>
              <li className="text-white text-opacity-50 mr-3 duration-300 hover:text-white hover:duration-300">
                <a href="#home">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="text-white text-opacity-50 mr-3 duration-300 hover:text-white hover:duration-300">
                <a href="#home">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li className="text-white text-opacity-50 mr-3 duration-300 hover:text-white hover:duration-300">
                <a href="#home">
                  <i className="fa-brands fa-behance" />
                </a>
              </li>
              <li className="text-white text-opacity-50 mr-3 duration-300 hover:text-white hover:duration-300">
                <a href="#home">
                  <i className="fa-brands fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {!isOpen && (
          <div
            onClick={toggleSideNav}
            className={`headerMenuToggle ${bgColor} flex items-center cursor-pointer fixed px-3 py-1 right-5 z-30`}
          >
            <span className="text-[#39b54a] duration-300 hover:text-white hover:duration-300">
              Menu
            </span>
            <span>
              <i className="fa-solid fa-bars text-2xl ml-3 text-white" />
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
