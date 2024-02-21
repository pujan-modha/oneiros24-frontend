"use client";
import TopImage from "../../assets/3days.webp";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { minorevents, majorEvents } from "../../data/events";
import "./events.css";

export default function Events() {
  const scrollDown = (el) => {
    document.getElementById("blueScroll").scrollTo({
      top: document.getElementById(el).offsetTop - 250,
      behavior: "smooth",
    });
  };
  return (
    <div className="overflow-hidden w-full bg-[#FBEDB6]">
      <Head>
        <title>Events</title>
      </Head>
      <Header />
      <div className="bg-[#fbedb6] fixed -z-50 h-[50vh] w-screen bottom-0">
        j
      </div>
      <div className="w-full h-40 z-10 relative mt-14 block bg-[#fbedb6]">
        <Image src={TopImage} layout="fill" objectFit="cover" alt="3days" />
      </div>
      <div className="w-full h-full bg-[#fbedb6]">
        <nav className="hidden -translate-y-1.5 fixed h-full w-1/4 font-Montserrat text-center bg-[#FBEDB6] text-[#90212E] md:flex flex-col items-start pl-10 overflow-y-scroll pb-72 ">
          <div className="w-24 border-b-[1px] border-b-[#90212E]">
            <h2 className=" pt-10 font-extrabold font-stolzl text-[#90212E] text-left tracking-widest">
              MAJOR EVENTS
            </h2>
          </div>
          <ul className="text-[#90212E] text-left cursor-pointer">
            {majorEvents.map((eventname, _i) => (
              <li
                key={_i}
                className="mt-1"
                onClick={() => scrollDown(`${eventname.name}${_i}`)}
              >
                {eventname.name}
              </li>
            ))}
          </ul>
          <div className="w-24 border-b-[1px] border-b-[#90212E] pt-10">
            <h2 className=" font-extrabold font-stolzl text-[#90212E] text-left tracking-widest">
              MINOR EVENTS
            </h2>
          </div>
          <ul className="text-[#90212E] text-left cursor-pointer">
            {minorevents.payload.map((eventname, _i) => (
              <li
                key={_i}
                className="mt-1"
                onClick={() => scrollDown(`${eventname.name}${_i}`)}
              >
                {eventname.name}
              </li>
            ))}
          </ul>
        </nav>
        <main
          className="md:h-[70vh] overflow-y-scroll overflow-x-hidden flex flex-col items-end md:w-3/4 md:float-right w-[100vw] "
          id="blueScroll"
        >
          <div className=" text-[#90212E] mr-auto ml-5 md:ml-20">
            <h2 className="font-stolzl text-[#90212E] text-2xl md:text-5xl pb-5">
              MAJOR EVENTS
            </h2>
            <h4 className="text-[#90212E] pb-6">6 Events</h4>
            <div className="w-full ">
              {majorEvents.map((majorEvent, _i) => (
                <div
                  className="flex flex-col md:flex-row mb-5 w-80 md:w-full items-center justify-center"
                  key={_i}
                >
                  <div className="" id={`${majorEvent.name}${_i}`}>
                    <Image
                      src={majorEvent.image}
                      height={450 * 1.5}
                      width={360 * 1.5}
                      alt="major event image"
                    />
                  </div>
                  <div className="flex flex-col items-start pl-5 md:pr-40 justify-between w-full">
                    <h2 className="font-stolzl text-2xl md:text-5xl uppercase">
                      {majorEvent.name}
                    </h2>
                    <h2 className="text-sm md:text-base">
                      Event by{" "}
                      <span className="font-bold">{majorEvent.eventby}</span>
                    </h2>
                    <h4 className="text-[#90212E]">{majorEvent.description}</h4>
                    <div className="text-accent text-2xl md:text-5xl font-stolzl">
                      {majorEvent.date}
                    </div>
                    <div className="text-[#90212E] text-lg md:text-3xl font-stolzl">
                      {majorEvent.time}
                    </div>
                    {majorEvent.link == "grey" ? (
                      <a className="inline-block w-full brightness-50">
                        {/* <button
                          className="w-full h-20 p-4 border-2 border-white mb-3  flex items-center justify-center transition delay-75 "
                          disabled
                        >
                          Register
                        </button> */}
                      </a>
                    ) : (
                      <a
                        href={majorEvent.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block w-full"
                      >
                        <button className="w-full h-20 p-4 border-2 border-white mb-3 hover:bg-white hover:text-black flex items-center justify-center transition delay-75 hover:ease-in-out ">
                          Register
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-[#90212E] mr-auto ml-5 md:ml-20">
            <h2 className="font-stolzl text-[#90212E] text-2xl md:text-5xl pb-5">
              MINOR EVENTS
            </h2>
            <h4 className="text-[#90212E]">40+ Events</h4>
            <div className="float-right pt-10">
              {minorevents.payload.map((minorevent, _i) => (
                <div key={_i}>
                  <p
                    className="text-4xl md:w-3/4 place-self-center font-Montserrat uppercase font-semibold ml-8"
                    id={`${minorevent.name}${_i}`}
                  >
                    {minorevent.name}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-y-10 gap-x-5 overflow-hidden pt-10 w-80 md:w-full">
                    {minorevent.eventNames.map((eventname, _i) => (
                      <div key={_i} className="mx-10">
                        <Link
                          href={eventname.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="relative bg-[#90212E] mb-5 hover:scale-125 transition ease-in-out duration-300 group  ">
                            <Image
                              src={eventname.image}
                              height={450}
                              width={360}
                              className="absolute group-hover:brightness-50 duration-75 ease-in z-20"
                              alt="image"
                            />
                            <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade cursor-pointer">
                              <span className="capitalize text-base font-semibold">
                                {eventname.eventName}
                              </span>
                              <span className="text-2xs font-medium ">
                                {eventname.description.length > 250
                                  ? eventname.description.substring(0, 249) +
                                    "..."
                                  : eventname.description}
                              </span>
                            </div>
                          </div>
                        </Link>
                        <div className="w-full h-20">
                          <div className="text-[#90212E] font-Montserrat">
                            {`${eventname.eventName}`}
                          </div>
                          <div className="text-[#90212E] font-Montserrat">
                            {eventname.date}
                            <span>{` | ${eventname.time}`}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      {/* <br />
      <br />
      <Image src="/EventsIntro.png" width={1920} height={314} />
      <div
        style={{
          width: '10vw',
          padding: '10px 30px 10px 30px',
          backgroundColor: '#06101C',
        }}
      >
        <div>
          <h2 style={{ color: '#3EDCF2', fontWeight: '800' }}>
            MAJOR
            <br />
            EVENTS
          </h2>
          <hr />
          <ul>
            <li>Cosmos</li>
            <li>Destival</li>
            <li>Requiem</li>
            <li>DJ Night</li>
            <li>Prabhdeep</li>
            <li>Lifafa</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#3EDCF2', fontWeight: '800' }}>
            MINOR
            <br />
            EVENTS
          </h2>
          <hr />
          <ul>
            <li>Aperture</li>
            <li>Cinefilia</li>
            <li>Convergence</li>
            <li>Coreografia</li>
            <li>D-Club</li>
            <li>Estrella</li>
            <li>Glitch</li>
            <li>Rotaract</li>
            <li>LearnIT</li>
            <li>Litmus</li>
            <li>The Music Club</li>
            <li>Scribbles</li>
          </ul>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div style={{ float: 'right' }}>
            <img src={item.source}></img>
            <h1>{item.title}</h1>
            <h3>Event by {item.club}</h3>
            <h4>{item.info}</h4>
            <h1>
              {item.date}
              <span style={{ verticalAlign: 'super' }}>th</span> OCT
            </h1>
            <h2>{item.time}</h2>
            <button
              className="hover: bg-white hover:text-black"
              style={{
                borderColor: 'white',
                borderWidth: '2px',
                backgroundColor: 'rgb(4,7,19)',
                color: 'white',
                padding: '10px 40px',
                fontSize: '170%',
                fontWeight: '600',
              }}
            >
              REGISTER
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}
