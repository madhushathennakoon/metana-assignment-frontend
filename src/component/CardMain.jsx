import React, { useState } from "react";
import Card01 from "./Card01";
import Card02 from "./Card02";
import Card03 from "./Card03";
import Card04 from "./Card04";
import Card05 from "./Card05";
import Card06 from "./Card06";
import Card07 from "./Card07";
import Card08 from "./Card08";
import Card09 from "./Card09";
import logo from "../assets/logo.png";
import up from "../assets/up.png";
import down from "../assets/down.png";

const CardMain = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return (
          <div className="flex justify-center mr-80 ">
            <div className="">
              <form className="mx-auto my-28">
                <h1 className="font-Lexend text-2xl text-[#191B33] mb-12">
                  <span className="text-[#CF9FFF] text-lg  ">1 → </span> Before
                  we start, what is your name?
                </h1>
                <h3 className="font-Lexend text-base text-[#CF9FFF]">
                  First Name
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane"
                  className="py-2.5 px-0 w-full mb-12  text-xl text-gray-200 font-Lexend bg-transparent border-0 border-b-2 dark:border-gray-200 focus:outline-none"
                />

                <h3 className="font-Lexend text-base text-[#CF9FFF]">
                  Last Name
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Smith"
                  className="py-2.5 px-0 w-full mb-12  text-xl text-blue-800 font-Lexend bg-transparent border-0 border-b-2 dark:border-gray-200 focus:outline-none"
                />

                <button
                  onClick={() => setCurrentPage("card01")}
                  className="px-4 py-2 text-lg font-bold text-white transition duration-300 ease-in-out rounded bg-btnColor hover:bg-btnHoverColor font-Lexend"
                >
                  OK
                </button>
                <span className="ml-4 text-xs font-Lexend text-[#191B33]">
                  press Enter
                </span>
              </form>
            </div>
          </div>
        );
      case "card01":
        return <Card01 setSecondPage={() => setCurrentPage("card02")} />;
      case "card02":
        return <Card02 setThirdPage={() => setCurrentPage("card03")} />;
      case "card03":
        return <Card03 setFourthPage={() => setCurrentPage("card04")} />;
      case "card04":
        return <Card04 setFifthPage={() => setCurrentPage("card05")} />;
      case "card05":
        return <Card05 setSixthPage={() => setCurrentPage("card06")} />;
      case "card06":
        return <Card06 setSeventhPage={() => setCurrentPage("card07")} />;
      case "card07":
        return <Card07 setEightPage={() => setCurrentPage("card08")} />;
      case "card08":
        return <Card08 setNinthPage={() => setCurrentPage("card09")} />;
      case "card09":
        return <Card09 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mt-6 ml-4">
        <img src={logo} alt="Logo" />
      </div>
      {renderPage()}
      <div className="fixed bottom-0 right-0 mb-6 mr-6 ">
        <button>
          <img className="w-12 h-12 " src={up} />
        </button>
        <button>
          <img className="w-12 h-12 " src={down} />
        </button>
      </div>
    </div>
  );
};

export default CardMain;
