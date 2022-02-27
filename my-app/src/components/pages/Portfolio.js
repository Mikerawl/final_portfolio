import React from "react";
import cinema from "./images/cinema.jpg";
import notetaker from "./images/note-taker.jpg";
import playme from "./images/play-me.jpg";
import weather from "./images/weather.jpg";
import planner from "./images/planner.jpg";



const Portfolio = () => {
  return (
    <div className="md:container md:mx-auto pb-12">
      <h1 className="text-4xl py-6">Portfolio</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Cinemagic</h1>
          <img src={cinema} alt="cinemagic" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/rwashi690/Cinemagic">
              github
            </a>
            <a href="https://cinemajik.herokuapp.com/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Note-taker</h1>
          <img src={notetaker} alt="Note-taker" />
          <div className="flex justify-between pt-2">
            <a className="" href="#">
              github
            </a>
            <a href="#">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Daily Planner</h1>
          <img src={planner} alt="daily planner" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/Mikerawl/daily-schedule-5">
              github
            </a>
            <a href="https://mikerawl.github.io/daily-schedule-5/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Play Me</h1>
          <img src={playme} alt="PlayMe" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/caitlinw29/PlayMe">
              github
            </a>
            <a href="https://caitlinw29.github.io/PlayMe/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Weather</h1>
          <img src={weather} alt="weather" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/Mikerawl/homework6">
              github
            </a>
            <a href="https://mikerawl.github.io/homework6/">Live link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
