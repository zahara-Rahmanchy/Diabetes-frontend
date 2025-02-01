import React from "react";

const LoadingModal = ({text}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-50">
      <p className=" text-xl text-center text-blue-500">{text}</p>
      <div className="relative flex flex-col justify-center items-center">
        {/* Blurry background */}
        {/* <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div> */}

        {/* Circular loading animation */}
        <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-white bg-opacity-70">
          <div className="absolute w-32 h-32 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
