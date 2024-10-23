import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";


const About = () => {
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);
  // CountUp Lib
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true); // يبدأ العد عندما يصبح العنصر مرئيًا
            observer.disconnect(); // إيقاف المراقبة بعد بدء العد
          }
        });
      },
      { threshold: 0.5 } // يبدأ العد عندما يصبح 50% من العنصر مرئيًا
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen scroll-smooth py-32 bg-[#39b54a]">
      <div className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto p-5 text-center">
        <div className="w-full pb-10">
          <h3
            data-aos="fade-down"
            className="text-black font-bold text-sm mb-3 tracking-widest uppercase"
          >
            Hello There
          </h3>
          <h1
            data-aos="fade-up"
            className=" text-nowrap font-semibold text-5xl sm:text-6xl lg:text-7xl"
          >
            We Are Glint
          </h1>
          <div data-aos="fade-left">
          <hr
            className="my-12 w-[60%] mx-auto opacity-35"
          />
          </div>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-black font-serif leading-relaxed text-xl lg:text-2xl lg:leading-loose"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
          <div data-aos="fade-left">
          <hr
            className="my-12 w-[60%] mx-auto opacity-35"
          />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="w-full px-5 my-5 sm:border-r border-white border-opacity-25">
              <div
                ref={counterRef}
                className="text-6xl tracking-widest sm:text-7xl  xl:text-[84px] font-semibold pb-3 w-full"
              >
                {startCount ? <CountUp end={127} duration={5} /> : 0}
              </div>
              <h5 className="text-black text-[18px] font-semibold inline border-b sm:border-none border-white border-opacity-25 pb-5">
                Awards Received
              </h5>
            </div>
            <div className="px-5 my-5 lg:border-r border-white border-opacity-25">
              <div
                ref={counterRef}
                className="text-6xl tracking-widest sm:text-7xl  xl:text-[84px] font-semibold pb-3 w-full"
              >
                {startCount ? (
                  <CountUp end={1505} duration={5} separator="" />
                ) : (
                  0
                )}
              </div>
              <h5 className="text-black text-[18px] font-semibold inline border-b sm:border-none border-white border-opacity-25 pb-5">
                Cups of Coffee
              </h5>
            </div>
            <div className="px-5 my-5 sm:border-r border-white border-opacity-25">
              <div
                ref={counterRef}
                className="text-6xl tracking-widest sm:text-7xl  xl:text-[84px] font-semibold pb-3 w-full"
              >
                {startCount ? <CountUp end={109} duration={5} /> : 0}
              </div>
              <h5 className="text-black text-[18px] font-semibold inline border-b sm:border-none border-white border-opacity-25 pb-5">
                Projects Completed
              </h5>
            </div>
            <div className="px-5 my-5">
              <div
                ref={counterRef}
                className="text-6xl tracking-widest sm:text-7xl  xl:text-[84px] font-semibold pb-3 w-full"
              >
                {startCount ? <CountUp end={102} duration={5} /> : 0}
              </div>
              <h5 className="text-black text-[18px] font-semibold">
                Happy Clients
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[2px] h-20 md:h-24 lg:h-28 bg-white rounded-t-sm right-16 top-0"></div>
    </section>
  );
};

export default About;
