import Image from "next/image";
import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";

interface Item {
  id: string;
  img: string;
  title: string;
  site: string;
  source: string;
  background: string;
  date: string;
  desc: string;
  lang: string[];
  framework: string[];
}

interface itemProps {
  item: Item;
}

export default function FeaturedItem({ item }: itemProps) {

  const colorVariants = {
    sunnyside: 'bg-[#ffcc66]'
  }
    
  return (
    <div
      id={item.background}
      className={`bg-${item.background} flex flex-col pb-[20px] text-left md:pb-[50px]`}
    >
      <div className="max-w-[1140px] space-y-8 px-[20px] pt-[50px] pb-[30px] md:m-auto md:space-y-0 md:pt-[150px]">
        <p className="pb-10 opacity-50">{item.date}</p>
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
          <div className="mr-0 w-full space-y-8 md:mr-[200px]">
            <h2 className="text-[40px] font-medium leading-[45px] tracking-[0px] md:text-[60px] md:leading-[75px] md:tracking-[0.6px]">{item.title}</h2>
            <div className="flex gap-4">
                <a href={item.site}>
                    <Button variant="default" className="gap-2">
                        <ExternalLink size={15}/>
                        <p>Live Site</p>
                    </Button>
                </a>
                <a href={item.source}>
                    <Button variant="subtle" className="gap-2">
                        <Github size={15}/>
                        <p>Source Code</p>
                    </Button>
                </a>
            </div>
            <p className="text-[16px] leading-[26px] tracking-[0.6px] opacity-60 md:text-[30px] md:leading-[50px]">
              {item.desc}
            </p>
          </div>
          <div className="space-y-8">
            <div className="text-[16px] leading-[28px]">
              <h4 className="font-[600]">Language</h4>
              <ul className="opacity-60">
                {item.lang.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-[16px] leading-[28px]">
              <h4 className="font-[600]">Framework</h4>
              <ul className="opacity-60">
                {item.framework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1100px] p-[20px] md:p-0">
        <Image src={`/img/works/${item.img}`} height={1100} width={1100} alt="project image" className="w-full" />
      </div>
    </div>
  );
}
