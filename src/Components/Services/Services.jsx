import "aos/dist/aos.css";
const Services = () => {

  return (
    <section id="services" className="scroll-smooth py-32 w-full min-h-screen">
      <div className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto p-5 text-center">
        {/* Services Header */}
        <div className="w-full pb-10 text-black">
          <h3
            data-aos="fade-down"
            className="text-[#39b54a] font-bold text-sm mb-3 tracking-widest uppercase"
          >
            What We Do
          </h3>
          <h1
            data-aos="fade-up"
            className="w-full sm:w-[95%] lg:w-[90%] mx-auto font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-snug"
          >
            We’ve got everything you need to launch and grow your business
          </h1>
          <div data-aos="fade-left">
            <hr className="my-12 w-[60%] mx-auto" />
          </div>
        </div>
        {/* Services Body */}
        <div className="w-full py-5 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Services item */}
            <div data-aos="fade-right" className="md:flex md:text-start p-5 md:pr-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-brush text-[#39b54a] text-5xl" aria-label="Brand Identity Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Brand Identity</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            {/* Services item */}
            <div data-aos="fade-left" className="md:flex md:text-start p-5 md:pl-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-vector-square text-[#39b54a] text-5xl" aria-label="Illustration Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Illustration</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            {/* Services item */}
            <div data-aos="fade-right" className="md:flex md:text-start p-5 md:pr-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-bullhorn text-[#39b54a] text-5xl" aria-label="Marketing Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Marketing</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            {/* Services item */}
            <div data-aos="fade-left" className="md:flex md:text-start p-5 md:pl-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-earth-africa text-[#39b54a] text-5xl" aria-label="Web Design Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Web Design</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            {/* Services item */}
            <div data-aos="fade-right" className="md:flex md:text-start p-5 md:pr-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-cube text-[#39b54a] text-5xl" aria-label="Packaging Design Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Packaging Design</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            {/* Services item */}
            <div data-aos="fade-left" className="md:flex md:text-start p-5 md:pl-10 shadow-md rounded-md">
              {/* Services Icon */}
              <div className="mr-8 pb-5 text-center">
                <i className="fa-solid fa-briefcase text-[#39b54a] text-5xl" aria-label="Web Development Icon" />
              </div>
              {/* Services Content */}
              <div className="">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider pb-5">Web Development</h3>
                <p className="font-serif text-[18px] font-light text-[#757575] leading-relaxed">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
