import React from "react";

const Card02 = ({ setThirdPage }) => {
  return (
    <div className="flex justify-center mr-80">
      <div>
        <form className="mx-auto my-60">
          <h1 className="font-Lexend text-2xl text-[#191B33] mb-8">
            <span className="text-[#CF9FFF] text-lg  ">3 → </span>Which country
            you are from?
          </h1>

          <input
            type="text"
            name="name"
            placeholder="type or select an option"
            className="py-2.5 px-0 w-full text-xl mb-4 text-gray-200 font-Lexend bg-transparent border-0 border-b-2 dark:border-gray-200 focus:outline-none"
          />

          <button
            onClick={() => setThirdPage()}
            className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card02;

{
  /* <h1>This ia a Card02</h1>
      <button
        onClick={() => setThirdPage()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Page card 03
      </button> */
}
