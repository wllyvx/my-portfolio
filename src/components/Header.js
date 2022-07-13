import React from "react";

function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="flex w-[80%] items-start justify-start py-4">
        <p className="font-dm text-6xl">w</p>
      </nav>
      <div className="flex max-w-6xl flex-col items-center justify-between space-y-6 border border-type md:flex-row md:space-y-0 md:shadow-bold">
        <img
          src="./img/willy-ava-bw.png"
          alt=""
          className="w-screen md:w-6/12"
        />
        <div className="space-y-4 p-5 text-left md:w-6/12 md:space-y-6 md:pl-12">
          <h1 className="font=bold font-dm text-6xl leading-[3.5rem] text-main md:text-[6rem] md:leading-[5rem]">
            Hi! I'm Willy
          </h1>
          <div>
            <p className="font-poppins text-xl font-bold md:text-2xl">
              Frontend Developer
            </p>
            <p className="font-poppins">
              I basically build beautiful website 🙂
            </p>
          </div>
          <button className="text-md bg-main px-4 py-2 font-dm text-background hover:shadow-bold md:px-8 md:py-4 md:text-xl">
            <a href="#about">Contact Me!</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
