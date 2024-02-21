"use client";

import Header from "@/components/Header";
import {
  ConvenorTeamCard,
  Co_ConvenorTeamCard,
} from "../../components/TeamCard";
import React from "react";

export default function MeetTheTeam() {
  return (
    <>
      <Header />
      <div className="bg-[#FBEDB6]">
        <div className="max-w-[90vw] mx-auto px-4 lg:px-8 py-8">
          <div className="my-16 space-y-16">
            <div>
              <div className="mb-12">
                <p className="text-3xl text-center font-bold text-[#90212E]">
                  Convenors
                </p>
                <hr className="mt-1 border-[#90212E] opacity-50" />
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-8 mx-auto justify-center">
                <ConvenorTeamCard />
                <ConvenorTeamCard />
                <ConvenorTeamCard />
                <ConvenorTeamCard />
                <ConvenorTeamCard />
              </div>
            </div>
            <div>
              <div className="mb-12">
                <p className="text-3xl text-center font-bold text-[#90212E]">
                  Co-Convenors
                </p>
                <hr className="mt-1 border-[#90212E] opacity-50" />
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-8 mx-auto justify-center">
                <Co_ConvenorTeamCard />
                <Co_ConvenorTeamCard />
                <Co_ConvenorTeamCard />
                <Co_ConvenorTeamCard />
                <Co_ConvenorTeamCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
