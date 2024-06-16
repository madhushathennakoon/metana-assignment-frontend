import React from "react";

const Card03 = ({ setFourthPage }) => {
  return (
    <div className="flex justify-center mr-80">
      <div>
        <form className="mx-auto my-60">
          <h1 className="font-Lexend text-2xl text-[#191B33] mb-8">
            <span className="text-[#CF9FFF] text-lg  ">4 → </span>What is your
            phone number?
          </h1>

          <input
            type="text"
            name="name"
            placeholder="011 2848187"
            className="py-2.5 px-0 w-full text-xl mb-4 text-gray-200 font-Lexend bg-transparent border-0 border-b-2 dark:border-gray-200 focus:outline-none"
          />

          <button
            onClick={() => setFourthPage()}
            className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
          >
            OK
          </button>
          <span className="ml-4 text-xs font-Lexend text-[#191B33]">
            press enter
          </span>
        </form>
      </div>
    </div>
  );
};

export default Card03;

{
  /* <h1>This ia a Card03</h1>
      <button
        onClick={() => setFourthPage()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Page card 04
      </button> */
}
