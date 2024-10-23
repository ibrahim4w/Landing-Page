import apple from "./../../assets/imgs/clients/apple.png";
import atom from "./../../assets/imgs/clients/atom.png";
import blackberry from "./../../assets/imgs/clients/blackberry.png";
import dropbox from "./../../assets/imgs/clients/dropbox.png";
import envato from "./../../assets/imgs/clients/envato.png";
import firefox from "./../../assets/imgs/clients/firefox.png";
import joomla from "./../../assets/imgs/clients/joomla.png";
import magento from "./../../assets/imgs/clients/magento.png";
import user1 from "./../../assets/imgs/avatars/user-01.jpg";
import user2 from "./../../assets/imgs/avatars/user-02.jpg";
import user3 from "./../../assets/imgs/avatars/user-05.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  // Slider Clients
  const settingsClient = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  // Slider Avatar Clients
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="clients"
      className="bg-[#e7e7e7] py-32 scroll-smooth relative z-0"
    >
      <div className="w-[90%] md:w-[85%] xl:w-[80%] min-h-screen mx-auto text-center">
        {/* Clients Header */}
        <div className="w-full">
          <h3
            data-aos="fade-down"
            className="text-[#39b54a] font-bold text-sm mb-3 tracking-widest uppercase"
          >
            Our Clients
          </h3>
          <h1
            data-aos="fade-up"
            className="w-full text-black sm:w-[90%] lg:w-[80%] mx-auto font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-snug"
          >
            Glint has been honored to partner up with these clients
          </h1>
        </div>
        {/* Our Clients */}
        <div className="w-full">
          <div className="slider-container">
            <Slider {...settingsClient} className="py-10">
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={apple}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Client Image Apple"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={atom}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Atom"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={blackberry}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Blackberry"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={dropbox}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Dropbox"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={envato}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Envato"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={firefox}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image firefox"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={joomla}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Joomla"
                  />
                </a>
              </div>
              <div data-aos="fade-left" className="w-full px-5">
                <a href="#0" className="">
                  <img
                    src={magento}
                    className="w-full text-center mx-auto opacity-50 duration-500 hover:duration-500 hover:opacity-100"
                    alt="Cient Image Magento"
                  />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-[50%] h-[1px] mx-auto bg-black bg-opacity-15 my-10"></div>
        {/* Avatar About Our Clients */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full text-black">
          <div className="slider-container">
            <Slider {...settings} className="pt-10">
              <div>
                <p className="mb-10 w-4/5 mx-auto font-serif text-[#555555] text-xl md:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed xl:leading-relaxed">
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>
                <img
                  src={user1}
                  className="mx-auto w-24 h-auto rounded-full"
                  alt="User 1"
                />
                <span className="block pt-5 text-[18px] font-bold">
                  Tim Cook
                </span>
                <span className="block opacity-50 text-sm">CEO, Apple</span>
              </div>
              <div>
                <p className="mb-10 w-4/5 mx-auto font-serif text-[#555555] text-xl md:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed xl:leading-relaxed">
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>
                <img
                  src={user2}
                  className="mx-auto w-24 h-auto rounded-full"
                  alt="User 2"
                />
                <span className="block pt-5 text-[18px] font-bold">
                  Sundar Pichai
                </span>
                <span className="block opacity-50 text-sm">CEO, Google</span>
              </div>
              <div>
                <p className="mb-10 w-4/5 mx-auto font-serif text-[#555555] text-xl md:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed xl:leading-relaxed">
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>
                <img
                  src={user3}
                  className="mx-auto w-24 h-auto rounded-full"
                  alt="User 3"
                />
                <span className="block pt-5 text-[18px] font-bold">
                  Satya Nadella
                </span>
                <span className="block opacity-50 text-sm">CEO, Microsoft</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
