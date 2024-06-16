import React from "react";

const languages = [
  { id: "A", name: "Solidity" },
  { id: "B", name: "Rust" },
  { id: "C", name: "Node.js" },
  { id: "D", name: "Typescript" },
  { id: "E", name: "Javascript" },
  { id: "F", name: "C" },
  { id: "G", name: "C++" },
  { id: "H", name: "C#" },
  { id: "I", name: "SQL" },
  { id: "J", name: "Python" },
  { id: "K", name: "Assembly Language" },
  { id: "L", name: "Haskell" },
  { id: "M", name: "R" },
  { id: "N", name: ".NET" },
  { id: "O", name: "Other" },
];

const Card04 = ({ setFifthPage }) => {
  return (
    <>
      <div className="flex justify-center mr-70">
        <form className=" mx-auto p-4 my-20">
          <h3 className="  mb-2 font-Lexend text-2xl">
            <span className="text-[#CF9FFF] text-lg  ">5 → </span>
            What languages and frameworks are you familiar with?
          </h3>
          <p className="mb-12 font-Lexend text-xl text-[#191B33B3] ">
            Select all the languages you know.
          </p>
          <p className="mb-4 font-Lexend text-sm text-[#CF9FFF] ">
            Choose as many as you like.
          </p>
          <div className="grid grid-cols-3 gap-5 mb-4 ">
            {languages.map((lang) => (
              <label
                key={lang.id}
                className="flex items-center space-x-2 font-Lexend border border-[#CF9FFF] rounded-lg p-2 "
              >
                <input
                  type="checkbox"
                  value={lang.name}
                  className="form-checkbox h-6 w-6 accent-[#CF9FFF]"
                />
                <span className="text-[#CF9FFF] text-lg">{lang.name}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
            onClick={() => setFifthPage()}
          >
            OK
          </button>
        </form>
      </div>
    </>
  );
};

export default Card04;
