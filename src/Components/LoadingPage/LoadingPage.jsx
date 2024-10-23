import { Bars } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div
      className='flex justify-center items-center h-screen bg-black transition-all duration-1000'
    >
      <Bars
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
      />
    </div>
  );
};

export default LoadingPage;
