import React from "react";
import image_02 from "../assets/image_02.png";

const salaryRanges = [
  { id: "A", range: "<$30,000" },
  { id: "B", range: "$30,000 - $50,000" },
  { id: "C", range: "$50,000 - $80,000" },
  { id: "D", range: "$80,000 - $120,000" },
  { id: "E", range: "$120,000 - $250,000" },
  { id: "F", range: "$250,000 or more" },
];

const Card06 = ({ setSeventhPage }) => {
  return (
    <>
      <div className=" ">
        <form className="max-w-6xl  mx-auto  p-2 flex flex-col lg:flex-row my-10 ">
          <div className="w-full lg:w-1/2">
            <h3 className="mb-6 font-Lexend text-2xl">
              <span className="text-[#CF9FFF] text-lg  ">7 → </span>
              What is your current annual compensation? (Optional)
            </h3>
            <p className="mb-12 font-Lexend text-xl text-[#191B33B3]">
              Disclaimer: The information provided regarding salary will be kept
              confidential and will <span className="font-bold">not</span> be
              used as a determining factor for acceptance into the bootcamp. It
              will be used exclusively for career advancement guidance.
            </p>
            <div className="space-y-2 mb-4">
              {salaryRanges.map((salary) => (
                <label
                  key={salary.id}
                  className="block p-2 border rounded-lg bg-purple-50 text-[#CF9FFF] font-Lexend text-xl"
                >
                  <input
                    type="radio"
                    name="compensation"
                    value={salary.range}
                    className="mr-2 accent-[#CF9FFF] h-5 w-5 "
                  />
                  {salary.range}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out mt-2  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
              onClick={() => setSeventhPage()}
            >
              OK
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={image_02}
              alt="Average salary increase"
              className="max-w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Card06;
