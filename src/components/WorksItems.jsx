import React from "react";

function WorksItems(props) {
  return (
    <div
      id={props.background}
      className="flex flex-col pb-[20px] text-left md:pb-[50px]"
    >
      <div className="max-w-[1140px] space-y-8 px-[20px] pt-[50px] pb-[30px] md:m-auto md:space-y-0 md:pt-[150px]">
        <p className="pb-10 opacity-50">{props.date}</p>
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
          <div className="mr-0 w-full space-y-8 md:mr-[200px]">
            <a
              href={props.site}
              target="blank_"
              className="text-[40px] font-medium leading-[45px] tracking-[0px] hover:underline md:text-[60px] md:leading-[75px] md:tracking-[0.6px]"
            >
              {props.title}
            </a>
            <p className="text-[16px] leading-[26px] tracking-[0.6px] opacity-60 md:text-[30px] md:leading-[50px]">
              {props.desc}
            </p>
          </div>
          <div className="space-y-8">
            <div className="text-[16px] leading-[28px]">
              <h4 className="font-[600]">Language</h4>
              <ul className="opacity-60">
                {props.lang.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-[16px] leading-[28px]">
              <h4 className="font-[600]">Framework</h4>
              <ul className="opacity-60">
                {props.framework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1100px] p-[20px] md:p-0">
        <img src={`./img/works/${props.img}`} alt="" className="" />
      </div>
    </div>
  );
}

export default WorksItems;
