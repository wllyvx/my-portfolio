import React from "react";
import WorksItems from "./WorksItems";
import worksData from "../worksData";

function Works() {
  const workElements = worksData.map((item) => {
    return (
      <WorksItems
        key={item.id}
        img={item.img}
        title={item.title}
        site={item.site}
      />
    );
  });

  return (
    <section className="mt-24 flex w-full max-w-6xl justify-center px-6 pb-12 md:px-0">
      <div className="flex w-full flex-col items-center justify-center space-y-6 md:space-y-12">
        <div className="flex w-full justify-between text-left">
          <h2 className="text-left font-poppins text-2xl font-bold md:text-4xl">
            My Works //
          </h2>
          <button className="hidden border border-main bg-background px-8 font-poppins text-main transition-all duration-200 hover:bg-main hover:text-background md:block">
            <a href="http://github.com/wllyvx" target="blank_">
              View All
            </a>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-2">
          {workElements}
        </div>
        <button className="block border border-main bg-background px-8 font-poppins text-main transition-all duration-200 hover:bg-main hover:text-background md:hidden">
          <a href="http://github.com/wllyvx" target="blank_">
            View All
          </a>
        </button>
      </div>
    </section>
  );
}

export default Works;
