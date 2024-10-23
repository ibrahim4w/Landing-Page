import { useEffect, useState } from "react";
import About from "../About/About";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Aos from "aos";
import Work from "../Work/Work";
import LoadingPage from "../LoadingPage/LoadingPage";
// import Work from "../Work/Work";

const Layout = () => {
  const [load, setLoad] = useState(true);

  //   Aos Lib
  useEffect(() => {
    Aos.init({ duration: 1500 });

    setTimeout(()=>{
        setLoad(false);
    },1000)
  }, []);

  return (
    <>
      {load ? (
        <LoadingPage />
      ) : (
        <div className="overflow-hidden">
          <Home />
          <About />
          <Services />
          <Work />
          <Clients />
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
