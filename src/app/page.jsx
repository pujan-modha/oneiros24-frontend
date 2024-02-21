// import axios from "axios";
// import { useState, useEffect } from "react";
import "./app.css";
import Glimpses from "../assets/glimpses.jpg";
import MusicMan from "../assets/music-man.png";
import OneirosAlt from "../assets/oneiros2024-alt.png";
import Divider from "../components/Divider";
import Star from "../assets/star.png";
import Hero from "../components/Hero";
import HomeEventCard from "../components/HomeEventCard";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("/api/events/getEvents").then((res) => {
  //     setData(res.data.data);
  //     console.log(res.data.data);
  //   });
  // }, []);

  return (
    <div>
      {/* <h1>Home</h1>
      <ul>
        {data.map((event) => (
          <li key={event._id}>
            <div>
              <h1>{event.name}</h1>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul> */}
      <Header />
      <Hero />
      <Divider />
      <div className="relative overflow-hidden">
        <div className="bg-[#FBEDB6] bg-color">
          <div className="h-screen space-y-1 bg-camels lg:bg-center pt-[10vh] md:pt-[15vh] bg-contain bg-no-repeat md:bg-cover">
            <div className="flex">
              <p className="text-3xl md:text-5xl font-black text-[#90212E] m-auto">
                ABOUT EVENT
              </p>
            </div>
            <div>
              <Image
                src={OneirosAlt}
                alt="Oneiros'24"
                className="w-[56vw] md:w-[48vw] m-auto"
              />
            </div>
            <div className="text-center md:text-center m-auto leading-6 w-[90vw] md:w-[40vw] text-[#90212E]">
              <p>{`Oneiros is not just the annual cultural fest of Manipal University Jaipur but a thread of emotions, memories, and boundless creativity which binds people. This 'Teen Din ka Safar' is the place where people experience three power packed days of passionate competitions, fun games and activities, events of renowned artists, electrifying concerts and the cultural diversity of Jaipur. Over the years that Oneiros has established its legacy in, it has served host to artists like King, Darshan Raval. All in all, Oneiros is a testament to the indomitable spirit of exploration and self-expression, etching lasting memories in the hearts of all who partake in its magic.`}</p>
            </div>
          </div>
        </div>
        <div className="-mt-[15vh] md:-mt-[10vh]">
          <div className="bg-gate bg-contain pt-[15vh] md:pt-[40vh]">
            <p className="text-white text-center text-5xl md:text-7xl font-black">
              EVENTS
            </p>
            <div className="flex">
              <div className="mx-auto grid md:grid-cols-3 mt-16 gap-16">
                <HomeEventCard />
                <HomeEventCard />
                <HomeEventCard />
                <HomeEventCard />
                <HomeEventCard />
                <HomeEventCard />
              </div>
            </div>
            <div className="flex py-12">
              <button className="mx-auto bg-[#F8654B] text-white px-5 py-2.5">
                EXPLORE MORE
              </button>
            </div>
            <div className="absolute w-[40vw] md:w-[20vw] bottom-0 translate-y-[1vh] md:translate-x-[5vw] md:translate-y-[10vh]">
              <Image src={MusicMan} alt="Music Man" />
            </div>
            <div className="absolute w-[8vw] bottom-0 translate-x-[80vw] -translate-y-[10vh] scale-0 md:scale-100">
              <Image src={Star} alt="Star" />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <div className="flex">
          <p className="absolute text-center translate-y-[5vh] md:translate-y-[30vh] right-0 left-0 items-center font-black text-2xl md:text-5xl text-white">
            GLIMPSES OF THE PAST
          </p>
          <div>
            <Image src={Glimpses} alt="Glimpses" className="w-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
