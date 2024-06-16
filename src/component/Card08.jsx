import React from "react";

const Card08 = ({ setNinthPage }) => {
  return (
    <div className="flex justify-center mr-60 ">
      <div>
        <form className="mx-auto my-44">
          <h1 className="font-Lexend text-2xl text-[#191B33] mb-2">
            <span className="text-[#CF9FFF] text-lg  ">9 → </span> LinkedIn URL
            (optional)
          </h1>
          <h3 className="font-Lexend text-xl text-[#191B33B3] mb-12">
            Here's a sniper link to make your life easy - linkedin.com
            <br />
            <span>(It'll open in a new tab) 🚀</span>
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Type you answer here"
            className="py-2.5 px-0 w-full text-xl text-gray-200 font-Lexend bg-transparent border-0 border-b-2 dark:border-gray-200 focus:outline-none"
          />

          <button
            onClick={() => setNinthPage()}
            className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out mt-4  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
          >
            Submit
          </button>
          <span className="ml-4 text-xs font-Lexend text-[#191B33]">
            press enter
          </span>
        </form>
      </div>
    </div>
  );
};

export default Card08;
