import img1 from "./../../assets/imgs/portfolio/lady-shutterbug.jpg";
import img2 from "./../../assets/imgs/portfolio/woodcraft.jpg";
import img3 from "./../../assets/imgs/portfolio/the-beetle.jpg";
import img4 from "./../../assets/imgs/portfolio/grow-green.jpg";
import img5 from "./../../assets/imgs/portfolio/guitarist.jpg";
import img6 from "./../../assets/imgs/portfolio/palmeira.jpg";
import Masonry from "masonry-layout";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Work = () => {
  const gridRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Masonry Initialization
  useEffect(() => {
    const imagesLoaded = () => {
      // بعد التأكد من تحميل جميع الصور
      new Masonry(gridRef.current, {
        itemSelector: ".gridItem",
        columnWidth: ".gridItem",
        gutter: 0,
        percentPosition: true,
      });
    };

    // تحقق من تحميل جميع الصور
    const allImages = gridRef.current.querySelectorAll("img");
    let loadedImagesCount = 0;

    allImages.forEach((img) => {
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.onload = () => {
          loadedImagesCount++;
          if (loadedImagesCount === allImages.length) {
            imagesLoaded();
          }
        };
      }
    });

    if (loadedImagesCount === allImages.length) {
      imagesLoaded();
    }
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

  const handleImgIdx = (idx) => {
    setCurrentIdx(idx);
    setOpen(true);
  };

  return (
    <section
      id="work"
      className="scroll-smooth w-full h-full min:h-screen pt-32 bg-black relative"
    >
      <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto text-center">
        {/* Work Header */}
        <div className="w-full py-40">
          <h3
            data-aos="fade-down"
            className="text-[#39b54a] font-bold text-sm mb-3 tracking-widest uppercase"
          >
            Recent Works
          </h3>
          <h1
            data-aos="fade-up"
            className="w-full sm:w-[90%] lg:w-[80%] mx-auto font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-snug"
          >
            We love what we do, check out some of our latest works
          </h1>
          <div data-aos="fade-left">
            <hr className="my-12 w-[60%] mx-auto opacity-10" />
          </div>
        </div>
      </div>
      {/* Work Images */}
      <div className="bg-white">
        <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto text-center pb-32">
          <div className="w-full mx-auto relative -top-40">
            <div ref={gridRef} className="grid absolute">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImgIdx(idx)}
                  className="gridItem w-full md:w-1/2 z-50 group cursor-pointer overflow-hidden"
                >
                  <div>
                    <img
                      src={img}
                      alt={`Portfolio Image ${
                        [
                          "Shutterbug",
                          "Woodcraft",
                          "The Beetle",
                          "Grow Green",
                          "Guitarist",
                          "Palmeira",
                        ][idx]
                      }`}
                      className="w-full h-auto duration-1000 group-hover:scale-110 group-hover:duration-1000"
                    />
                  </div>
                  <div className="absolute inset-0 duration-500 group-hover:bg-black group-hover:bg-opacity-70 group-hover:duration-500 flex items-center justify-center">
                    <i className="fa-solid fa-plus opacity-0 scale-50 duration-500 group-hover:opacity-100 group-hover:duration-500 group-hover:scale-100" />
                  </div>
                  <span className="absolute top-0 left-[35px] bg-white bg-opacity-25 w-[1px] h-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:h-10 group-hover:duration-500"></span>
                  <a href="#0">
                    <i className="fa-solid fa-link text-xs flex items-center justify-center border border-white w-8 h-8 rounded-full absolute left-5 top-0 duration-500 opacity-0 group-hover:top-10 group-hover:duration-500 group-hover:opacity-100"></i>
                  </a>
                  <div className="absolute text-start bottom-0 left-5 opacity-0 duration-500 group-hover:bottom-10 group-hover:left-5 group-hover:opacity-100 group-hover:duration-500 ">
                    <h3 className="text-sm font-semibold tracking-widest uppercase pb-1">
                      {
                        [
                          "Shutterbug",
                          "Woodcraft",
                          "The Beetle",
                          "Grow Green",
                          "Guitarist",
                          "Palmeira",
                        ][idx]
                      }
                    </h3>
                    <p className="text-sm font-light text-[#ffffff80] tracking-wider">
                      {
                        [
                          "Branding",
                          "Web Design",
                          "Web Development",
                          "Branding",
                          "Web Design",
                          "Web Design",
                        ][idx]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Lightbox for images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img }))}
        index={currentIdx}
      />
    </section>
  );
};

export default Work;
