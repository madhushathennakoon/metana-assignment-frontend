import React from "react";
import image_02 from "../assets/image_02.png";

const Card07 = ({ setEightPage }) => {
  return (
    <div className="flex items-center justify-center my-36  ">
      <div className=" max-w-3xl  w-full">
        <h2 className="mb-6 font-Lexend text-2xl">
          <span className="text-[#CF9FFF] text-lg  ">8 → </span>
          Certifying Statement*
        </h2>
        <p className="font-Lexend text-xl text-[#191B33B3] mb-6">
          I hereby acknowledge that this application form was completed by me
          (the individual seeking to enroll in Metana) and I did not receive
          help from any external sources. The responses submitted are entirely
          my own and based on my own reasoning. Also, I opt in to receive
          communication messages from Metana about my application.
        </p>
        <div className="flex flex-col space-y-2 mb-4">
          <button
            onClick={() => setEightPage()}
            className="border rounded-lg bg-purple-50 text-[#CF9FFF] font-Lexend text-xl py-2 px-4 w-60 text-left"
          >
            I accept
          </button>
          <button className="border rounded-lg bg-purple-50 text-[#CF9FFF] font-Lexend text-xl py-2 px-4 w-60 text-left">
            I don't accept
          </button>
        </div>
        <button className=" bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out mt-2  text-white text-lg font-bold py-2 px-4 rounded font-Lexend">
          OK
        </button>
      </div>
    </div>
  );
};

export default Card07;
