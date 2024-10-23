import bgContact from "./../../assets/imgs/contact-bg.jpg";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="pt-32 sm:py-32 scroll-smooth w-full min:h-screen relative z-10"
      style={{
        backgroundImage: `url(${bgContact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 bottom-0 w-full h-full bg-black bg-opacity-80"></div>
      {/* Contact Line */}
      <div className="absolute top-0 left-1/2 -translate-y-1/2 z-20 w-[2px] h-40 rounded-md bg-green-500"></div>
      {/* Contact Body */}
      <div className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto text-center">
        {/* Contact Us Header */}
        <div className="w-full">
          <h3
            data-aos="fade-down"
            className="text-[#39b54a] font-bold text-sm mb-3 tracking-widest uppercase"
          >
            Contact Us
          </h3>
          <h1
            data-aos="fade-up"
            className="w-full sm:w-[90%] lg:w-[80%] mx-auto font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-snug"
          >
            Reach out for a new project or just say hello
          </h1>
        </div>
      </div>
      <div className="w-full sm:w-[90%] md:w-[85%] xl:w-[80%] text-center mx-auto">
        <div className="flex flex-wrap justify-start items-center bg-black bg-opacity-30 relative z-10 mt-10">
          {/* Primary Contact */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-full lg:w-2/3 p-10"
          >
            <h3 className="font-medium tracking-widest lg:text-start text-xs uppercase">
              Send Us A Message
            </h3>
            <form className="py-3">
              {/* Input Name */}
              <div className="w-full py-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b py-5 border-white border-opacity-10 placeholder:font-extralight placeholder:tracking-widest placeholder:text-white placeholder:opacity-15 placeholder:font-sans placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-[#39b54a]"
                />
              </div>
              {/* Input Email */}
              <div className="w-full py-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b py-5 border-white border-opacity-10 placeholder:font-extralight placeholder:tracking-widest placeholder:text-white placeholder:opacity-15 placeholder:font-sans placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-[#39b54a]"
                />
              </div>
              {/* Input Subject */}
              <div className="w-full py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full bg-transparent border-b py-5 border-white border-opacity-10 placeholder:font-extralight placeholder:tracking-widest placeholder:text-white placeholder:opacity-15 placeholder:font-sans placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-[#39b54a]"
                />
              </div>
              {/* Text Area Input */}
              <div className=" w-full py-2">
                <textarea
                  placeholder="Message"
                  name=""
                  rows="8"
                  className="w-full bg-transparent border-b py-5 border-white border-opacity-10 placeholder:font-extralight placeholder:tracking-widest placeholder:text-white placeholder:opacity-15 placeholder:font-sans placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-[#39b54a]"
                ></textarea>
              </div>
              {/* Input Button */}
              <div className=" w-full pt-2">
                <button
                  type="button"
                  className="text-white w-full bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-sm px-5 py-3 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-700 duration-300 hover:duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Secondary Contact */}
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-full lg:w-1/3 lg:text-start p-10 lg:bg-black lg:bg-opacity-80"
          >
            <h3 className="font-medium tracking-widest hidden lg:block text-start text-xs uppercase pb-5">
              Contact Info
            </h3>
            <div className="py-5 lg:py-7">
              <h5 className="text-[#39b54a] font-semibold tracking-wider pb-3">
                Where to Find Us
              </h5>
              <p className="text-sm opacity-40 leading-loose">
                1600 Amphitheatre Parkway <br /> Mountain View, CA <br /> 94043
                US
              </p>
            </div>
            <div className="py-5 lg:py-7">
              <h5 className="text-[#39b54a] font-semibold tracking-wider pb-3">
                Email Us At
              </h5>
              <p className="text-sm opacity-40 leading-loose">
                contact@glintsite.com <br />
                info@glintsite.com
              </p>
            </div>
            <div className="py-5 lg:py-7">
              <h5 className="text-[#39b54a] font-semibold tracking-wider pb-3">
                Call Us At
              </h5>
              <p className="text-sm opacity-40 leading-loose">
                Phone: (+63) 555 1212 <br />
                Mobile: (+63) 555 0100 <br />
                Fax: (+63) 555 0101
              </p>
            </div>
            {/* Social Icon */}
            <div className="py-5 lg:py-7">
              <ul className="flex justify-center lg:justify-start items-center">
                <li className="text-white mr-5 duration-500 hover:text-[#39b54a] hover:duration-500">
                  <a href="#home">
                    <i className="fa-brands fa-facebook-f text-xl"></i>
                  </a>
                </li>
                <li className="text-white mr-5 duration-500 hover:text-[#39b54a] hover:duration-500">
                  <a href="#home">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="text-white mr-5 duration-500 hover:text-[#39b54a] hover:duration-500">
                  <a href="#home">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li className="text-white mr-5 duration-500 hover:text-[#39b54a] hover:duration-500">
                  <a href="#home">
                    <i className="fa-brands fa-behance" />
                  </a>
                </li>
                <li className="text-white mr-5 duration-500 hover:text-[#39b54a] hover:duration-500">
                  <a href="#home">
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
