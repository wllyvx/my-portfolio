import React from "react";
import WorksItems from "./WorksItems";
import worksData from "../worksData";

function Works() {
  const workElements = [...worksData].reverse().map((item) => {
    return (
      <WorksItems
        key={item.id}
        img={item.img}
        title={item.title}
        site={item.site}
        background={item.background}
        date={item.date}
      />
    );
  });

  return (
    <section className="mt-10">
      <div>{workElements}</div>
    </section>
  );
}

export default Works;
