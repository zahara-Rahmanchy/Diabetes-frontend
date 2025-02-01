/* eslint-disable react/prop-types */
import {Player} from "@lottiefiles/react-lottie-player";

import Dia from "../../assets/animation_lkgfscy7.json";
import nonDia from "../../assets/animation_lkgfl9hf.json";
import warn from "../../assets/animation_lkumounl.json";
// import {useContext} from "react";
// import {AuthContext} from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";
// import axios from "axios";
// import {FaHeart} from "react-icons/fa";

const Response = ({res}) => {
  console.log(res);
  //   const {user} = useContext(AuthContext);

  //   const handleRisk = () => {
  //     if (!user) {
  //       Swal.fire({title: "Please login to save", color: "#1d2939"});
  //       return;
  //     }
  //     axios
  //       .patch(`http://localhost:5000/save-risk/${user?.email}`, {
  //         value: res,
  //       })
  //       .then(response => {
  //         if (response.data.modifiedCount) {
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your risk assesment has been saved",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });

  //     console.log(res);
  //   };

  return (
    <div className="result-container mt-2 mb-5 w-1/2 border border-[#1d2939] mx-auto max-w-screen-lg bg-base-200 shadow-lg card">
      {/* <h2 className="text-center text-lg">Diabetic Prediction Result:</h2> */}
      {res === 0 ? (
        <>
          <h1 className="mt-5 text-center text-xl text-[#1d2939] font-mono font-bold">
            {" "}
            Congratulations! You are not at risk
          </h1>
          <h2 className="mt-5 text-center text-lg text-[#1d2939] font-mono font-medium">
            Diabetic Prediction Result:{" "}
            <span className="text-green-400 font-semibold w-">No Risk</span>{" "}
            <br />
          </h2>
          <Player
            src={nonDia}
            className="player w-1/3  m-0 p-0"
            loop
            autoplay
          />
        </>
      ) : res === 1 ? (
        <>
          <h1 className="mt-5 text-center text-xl text-[#1d2939] font-mono font-bold">
            {" "}
            Please Take care of yourself, you are at moderate risk
          </h1>
          <h2 className="mt-5 text-center text-lg text-[#1d2939] font-mono font-medium">
            Diabetic Prediction Result:{" "}
            <span className="text-yellow-400 font-semibold">Moderate Risk</span>{" "}
            <br />
          </h2>
          <Player src={warn} className="player w-1/5" loop autoplay />
        </>
      ) : res === 2 ? (
        <>
          <h1 className="mt-5 text-center text-xl text-[#1d2939] font-mono font-bold">
            {" "}
            You are at high risk of diabetes. Please monitor your health.
          </h1>
          <h2 className="mt-5 text-center text-lg text-[#1d2939] font-mono font-medium">
            Diabetic Prediction Result:{" "}
            <span className="text-red-500 font-semibold">High Risk</span> <br />
          </h2>
          <Player src={Dia} className="player w-1/3" loop autoplay />
        </>
      ) : null}
      {/* <button
        onClick={handleRisk}
        className="btn w-1/2 mx-auto my-2 btn-outline bg-white outline-[#1d2939] "
      >
        Save assesment
      </button> */}
    </div>
  );
};

export default Response;
