import pujan from "../assets/Pujan.jpg";
import Image from "next/image";
import React from "react";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function ConvenorTeamCard() {
  return (
    <>
      <div>
        <div className="mx-auto w-48">
          <div className="relative overflow-hidden transition hover:scale-110 duration-300">
            <Image
              src={pujan}
              alt="Pujan Modha"
              className="object-cover w-full aspect-[3/4]"
            />
            <div className="absolute bg-gradient-to-t to-50% from-[#90212E] text-[#FBEDB6] inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-opacity-100 opacity-0 hover:opacity-100">
              <div className="justify-center">
                <div>
                  <p className="text-lg">Pujan Modha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Co_ConvenorTeamCard() {
    return (
      <>
        <div>
          <div className="mx-auto w-48">
            <div className="relative overflow-hidden transition hover:scale-110 duration-300">
              <Image
                src={pujan}
                alt="Pujan Modha"
                className="object-cover w-full aspect-[3/4]"
              />
              <div className="absolute bg-gradient-to-t to-50% from-[#90212E] text-[#FBEDB6] inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-opacity-100 opacity-0 hover:opacity-100">
                <div className="justify-center">
                  <div>
                    <p className="text-lg">Pujan Modha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  