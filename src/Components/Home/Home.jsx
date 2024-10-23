import Navbar from "../Navbar/Navbar";
import hero from "./../../assets/imgs/hero-bg.jpg"

const Home = () => {

  return (
    <section
      id="home"
      className="w-full min-h-screen relative inset-0 py-10 scroll-smooth overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="overLay absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,.7)" }}
      ></div>
      <Navbar />

      {/* Home Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-[85%] md:w-[95%] mx-auto pt-[4rem] xl:pt-[7rem] flex justify-between items-start text-center sm:text-start"
      >
        <div className="w-full md:w-[85%] lg:w-[75%] mx-auto">
          <h3
            data-aos="fade-right"
            className="mb-5 md:ml-2 text-white text-opacity-50 text-xs md:text-lg uppercase tracking-[.2rem]"
          >
            Welcome to Glint
          </h3>
          <h1
            data-aos="fade-left"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
          >
            We are a creative group <br /> of people who design <br />
            influential brands and <br /> digital experiences.
          </h1>
          <div className="mt-10 sm:mt-14 md:mt-20 w-[85%] sm:w-full mx-auto">
            <a href="#contact">
              <button
                data-aos="zoom-in"
                className="uppercase font-medium w-full sm:w-auto mb-5 sm:mr-5 text-xs tracking-[.1rem] px-10 py-5 border-2 border-white duration-500 hover:duration-500 hover:text-black hover:border-white hover:bg-white"
              >
                Start a Project
              </button>
            </a>
            <a href="#about">
              <button
                data-aos="zoom-in"
                className="uppercase font-medium w-full sm:w-auto text-xs tracking-[.1rem] px-10 py-5 border-2 border-white duration-500 hover:duration-500 hover:text-black hover:border-white hover:bg-white"
              >
                More about us
              </button>
            </a>
          </div>
        </div>
        {/* Socail Icons */}
        <div className="relative hidden sm:block">
          <ul className="absolute z-10 md:right-0 lg:right-3 top-[5rem] space-y-5">
            <li
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-5 relative"
            >
              <a href="#home" className="group">
                <i className="fa-brands fa-facebook-f text-xs flex items-center justify-center border-2 border-white w-8 h-8 rounded-full"></i>
                <span className="text-[#39b54a] text-[13px] absolute opacity-0 invisible top-2 right-10 transform group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all duration-500">
                  Facebook
                </span>
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-5 relative"
            >
              <a href="#home" className="group">
                <i className="fa-brands fa-twitter text-xs flex items-center justify-center border-2 border-white w-8 h-8 rounded-full"></i>
                <span className="text-[#39b54a] text-[13px] absolute opacity-0 invisible top-2 right-10 transform group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all duration-500">
                  Twitter
                </span>
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-5 relative"
            >
              <a href="#home" className="group">
                <i className="fa-brands fa-instagram text-xs flex items-center justify-center border-2 border-white w-8 h-8 rounded-full" />
                <span className="text-[#39b54a] text-[13px] absolute opacity-0 invisible top-2 right-10 transform group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all duration-500">
                  Instagram
                </span>
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-5 relative"
            >
              <a href="#home" className="group">
                <i className="fa-brands fa-behance text-xs flex items-center justify-center border-2 border-white w-8 h-8 rounded-full" />
                <span className="text-[#39b54a] text-[13px] absolute opacity-0 invisible top-2 right-10 transform group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all duration-500">
                  Behance
                </span>
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-5 relative"
            >
              <a href="#home" className="group">
                <i className="fa-brands fa-dribbble flex items-center justify-center border-2 border-white w-8 h-8 text-xs rounded-full" />
                <span className="text-[#39b54a] text-[13px] absolute opacity-0 invisible top-2 right-10 transform group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 scale-50 group-hover:scale-100 transition-all duration-500">
                  Dribble
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Line && Scroll */}
      <div className="mt-28">
        <a
          data-aos="fade-up"
          href="#about"
          className="absolute z-50 right-20 bottom-16 md:bottom-20 lg:bottom-24 font-semibold text-[10px] tracking-[.3rem]"
        >
          <i className="fa-solid fa-chevron-down text-[#39b54a] text-sm mr-2" />
          Scroll Dwon
        </a>
        <div className="absolute w-[2px] h-20 md:h-24 lg:h-28 bg-[#39b54a] rounded-t-sm right-16 bottom-0"></div>
      </div>
    </section>
  );
};

export default Home;
