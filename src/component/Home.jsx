import React, { useState } from "react";
import CardMain from "./CardMain";
import image_01 from "../assets/image_01.png";
import logo from "../assets/logo.png";

const Home = () => {
  const [page, setPage] = useState(false);
  return (
    <>
      <div className="">
        {page ? (
          <CardMain />
        ) : (
          <>
            <div className="mt-6 ml-4">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex justify-evenly mt-28">
              <div className="content-center">
                <h1 className="text-4xl font-bold mb-3 leading-snug font-Lexend text-[#191B33]   ">
                  Launch your Data Career in Weeks,
                  <br />
                  <span className="leading-snug">not Years</span>
                </h1>
                <h2 className="text-xl text-[#191B33B3] font-Lexend">
                  What to expect:
                </h2>
                <h2 className="text-xl text-[#191B33B3] font-Lexend ">
                  - <span className="font-bold ">Short-answer </span>
                  questions & <span className="font-bold ">No</span> cover
                  letter
                </h2>
                <h2 className="text-xl mb-8 text-[#191B33B3] font-Lexend">
                  - Takes 4 mins on averager
                </h2>
                <button
                  className="  bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out text-white text-2xl font-bold py-2 px-4 rounded font-Lexend"
                  onClick={() => setPage(!page)}
                >
                  Start Your Journey
                </button>
                <span className="ml-4 text-xs font-Lexend text-[#191B33B3] ">
                  press Enter
                </span>
                <p className="text-sm mt-2 font-Lexend text-[#191B33B3]">
                  108 people have filled this out
                </p>
              </div>

              <div className="">
                <img src={image_01} alt="image" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
