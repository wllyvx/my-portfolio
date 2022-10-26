import React from "react";

function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="flex w-[80%] items-start justify-start py-4">
        <p className="font-dm text-4xl md:text-6xl">w</p>
      </nav>
      <div className="my-2 flex max-w-[1140px] flex-col items-center justify-center px-[20px] text-left md:my-10 lg:px-0">
        <h1 className="font-poppins text-[50px] font-semibold leading-[50px] tracking-[-2px] text-main md:text-[150px] md:leading-[130px] md:tracking-[-10px]">
          Willy, Frontend Developer
        </h1>
      </div>
    </header>
  );
}

export default Header;
