import Dome from "../assets/dome.png";
import Oneiros24Logo from "../assets/oneiros24.png";
import Cloud from "../assets/cloud.png";
import Baloon from "../assets/baloon.png";
import "./components.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-auto h-screen bg-[#80DFE7]">
          <div className="absolute left-0 right-0 top-[40vh] md:top-[35vh]">
            <Image
              src={Oneiros24Logo}
              alt="Oneiros'24"
              className="w-[90vw] md:w-[50vw] mx-auto"
            />
          </div>
          <div className="absolute -left-16 md:-left-24 top-24 animate-shake animate-infinite animate-duration-[20000ms] animate-linear">
            <Image
              src={Cloud}
              alt="Left Cloud"
              className="w-[24rem] -scale-x-100 -rotate-12 opacity-90"
            />
          </div>
          <div className="absolute -right-32 md:-right-48 top-[50vh] md:top-32 animate-shake animate-infinite animate-duration-[25000ms] animate-linear">
            <Image
              src={Cloud}
              alt="Right Cloud"
              className="w-[28rem] md:w-[32rem] opacity-90"
            />
          </div>
          <div className="absolute left-[6vw] top-[55vh] md:top-[65vh] animate-bounce animate-infinite animate-duration-[25000ms] animate-ease-linear">
            <Image src={Baloon} alt="Baloon 1" className="w-[6rem] opacity-90" />
          </div>
          <div className="absolute -right-[10vw] md:right-[18vw] top-[10vh] md:top-[5vh] animate-bounce animate-infinite animate-duration-[33000ms] animate-ease-linear">
            <Image
              src={Baloon}
              alt="Baloon 2"
              className="w-[10rem] md:w-[8rem] opacity-90"
            />
          </div>
          <div className="absolute -right-[4vw] top-[52vh] animate-bounce animate-infinite animate-duration-[50000ms] animate-ease-linear">
            <Image
              src={Baloon}
              alt="Baloon 3"
              className="w-[16rem] opacity-90 scale-[0%] md:scale-100"
            />
          </div>
          <div className="relative w-screen z-10 pt-[60vh] md:pt-48">
            <Image
              src={Dome}
              alt="Dome Building"
              className="w-screen scale-[250%] md:scale-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
