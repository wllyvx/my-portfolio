import React from "react";
import WorksItems from "./WorksItems";
import worksData from "../worksData";

function Works() {
  return (
    <section className="mt-10">
      <div>
        {[...worksData].reverse().map((item) => (
          <WorksItems
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            site={item.site}
            background={item.background}
            date={item.date}
            lang={item.lang}
            framework={item.framework}
          ></WorksItems>
        ))}
      </div>
    </section>
  );
}

export default Works;
