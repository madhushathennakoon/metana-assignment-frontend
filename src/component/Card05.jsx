import React from "react";

const levels = [
  { id: "A", name: "No experience (I have never programmed before.)" },
  {
    id: "B",
    name: "Beginner (I have played with some introductory coding lessons and tutorials.)",
  },
  {
    id: "C",
    name: "Intermediate (I have completed some coding classes or tutorials.)",
  },
  { id: "D", name: "Advanced (I can build applications.)" },
  { id: "E", name: "Professional (I am an experienced software engineer.)" },
];

const Card05 = ({ setSixthPage }) => {
  return (
    <>
      <div className="flex justify-center mr-70">
        <form className="max-w-screen-sm  mx-auto  my-24">
          <h3 className="  mb-10 font-Lexend text-2xl ">
            <span className="text-[#CF9FFF] text-lg  ">6 → </span>
            How would you describe your current level of coding experience?
          </h3>
          <div className="space-y-2 mb-4">
            {levels.map((level) => (
              <label
                key={level.id}
                className="block p-2 border rounded-lg bg-purple-50 text-[#CF9FFF] font-Lexend text-xl"
              >
                <input
                  type="radio"
                  name="experience"
                  value={level.name}
                  className="mr-2 accent-[#CF9FFF] h-5 w-5  "
                />
                {level.name}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="bg-btnColor hover:bg-btnHoverColor transition duration-300 ease-in-out  text-white text-lg font-bold py-2 px-4 rounded font-Lexend"
            onClick={() => setSixthPage()}
          >
            OK
          </button>
        </form>
      </div>
    </>
  );
};

export default Card05;
