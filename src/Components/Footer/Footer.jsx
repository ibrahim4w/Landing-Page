import logoFooter from "./../../assets/imgs/logo-footer.png";
import EmailIcon from "./../../assets/imgs/email-icon.png";

const Footer = () => {

    window.addEventListener("scroll", function() {
        const scrollIcon = document.querySelector(".scroll-icon");
        const scrollPosition = window.scrollY;
      
        // إذا كان التمرير قريبًا من أعلى الصفحة، اجعل الأيقونة تختفي
        if (scrollPosition < 1000) {  // هنا تحدد متى تختفي الأيقونة
          scrollIcon.style.opacity = "0";
        } else {
          scrollIcon.style.opacity = "1";
        }
      });
      

  return (
    <footer className=" bg-black bg-opacity-95 py-12 relative">
      <div className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto text-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-white px-5 text-opacity-35 text-sm tracking-wider leading-loose text-start"
          >
            {/* Footer Image */}
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={logoFooter}
                className="w-20 h-auto mb-10"
                alt="Footer Logo Glint"
              />
            </div>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-start px-5 py-5"
          >
            <h4 className="mb-10 font-semibold tracking-widest text-center md:text-start">
              Get Notified
            </h4>
            <p className="text-white text-opacity-35 text-sm tracking-wider leading-loose">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            {/* Form Email */}
            <form className="mt-10">
              <div className="sm:relative inline-blck w-full sm:flex justify-center sm:w-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black bg-opacity-35 focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-25 placeholder:pl-3 placeholder:tracking-wider py-3 px-10 w-full"
                  style={{
                    backgroundImage: `url(${EmailIcon})`,
                    backgroundSize: "24px 16px, auto",
                    backgroundPosition: "10px center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <input
                  type="submit"
                  name="subscribe"
                  value="Subscribe"
                  className="sm:absolute top-0 right-0 uppercase p-4 my-5 sm:my-0 w-full sm:w-auto text-xs font-medium tracking-[.2rem] bg-[#39b54a]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-24 text-sm font-sans text-white text-opacity-35 tracking-wider flex items-center justify-center">
          <span>© Copyright Glint 2022</span>
          <span className="relative after:absolute after:-top-[5px] after:content-[''] after:w-[2px] after:h-3 after:bg-white after:bg-opacity-25 mx-3"></span>
          <span>
            {" "}
            Site Template by{" "}
            <a
              href="#https://colorlib.com"
              className="text-white duration-300 hover:duration-300 hover:text-[#39b54a]"
            >
              Colorlib
            </a>
          </span>
        </div>
      </div>
      {/* Scroll Up */} 
      <div className="scroll-icon duration-300 fixed bottom-0 right-5 z-10 p-4 group">
        <a href="#home" className="w-14 h-14 bg-black flex justify-center items-center">
          <i className="fa-solid fa-arrow-up text-sm opacity-50 duration-300 group-hover:opacity-100 group-hover:duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
