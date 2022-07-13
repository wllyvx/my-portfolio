import React from "react";
import Contact from "./Contact";

function About() {
  return (
    <section
      id="about"
      className="mb-0 flex w-full items-center justify-center md:mb-28"
    >
      <div className="flex max-w-6xl flex-col border border-type md:flex-row">
        <div className="w-full space-y-6 p-4 text-left md:w-9/12 md:p-12">
          <div className="w-full">
            <h2 className="font-dm text-6xl">About</h2>
          </div>
          <div className="space-y-4">
            <h3 className="font-poppins text-3xl font-bold">
              Willy Fajar Ramadhan
            </h3>
            <p className="font-poppins">
              Final year student with 1 year experience of developing websites
              and slicing UI Designs. I have a knack for all things launching
              websites, from planning and designing all the way to implementing
              the design with code. I also have some experience in shooting and
              editing videos. When not online, I love to hanging out with my
              camera taking pictures or just go to nearby coffee shop.
            </p>
          </div>
        </div>
        <div className="w-full border-l border-type text-left md:w-3/12 md:text-center">
          <div className="flex h-[30%] w-full items-center justify-center border-b border-type">
            <h2 className="font-dm text-6xl">Contact</h2>
          </div>
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default About;
