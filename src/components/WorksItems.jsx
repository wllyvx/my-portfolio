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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores architecto, impedit porro eveniet eius, culpa
              cupiditate expedita corporis consequatur saepe accusamus aperiam
              id corrupti unde rerum similique illo rem quidem consectetur
              laboriosam doloribus tempore quos nobis qui. Expedita, at quo
              magnam nulla ducimus fugit pariatur accusantium perspiciatis?
              Quaerat, nam nulla.
            </p>
          </div>
          <div className="text-[16px] leading-[28px]">
            <h4 className="font-[600]">Language</h4>
            <ul className="opacity-60">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
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
