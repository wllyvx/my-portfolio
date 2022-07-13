import React from "react";

function WorksItems(props) {
  return (
    <div className="max-w-sm space-y-6 border border-type">
      <img src={`./img/works/${props.img}`} alt="" />
      <div className="space-y-4 px-4 pb-4 text-left">
        <h3 className="font-poppins text-xl font-bold">{props.title}</h3>
        <a
          href={`${props.site}`}
          target="blank_"
          className="font-poppins text-main underline decoration-main decoration-2"
        >
          View live site
        </a>
      </div>
    </div>
  );
}

export default WorksItems;
