import React from "react";

const Portfolio = () => {
  return (
    <div className="md:container md:mx-auto pb-12">
      <h1 className="text-4xl py-6">Portfolio</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Cinemagic</h1>
          <img src="/assets/images/cinema.jpg" alt="cinemagic" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/rwashi690/Cinemagic">
              github
            </a>
            <a href="https://cinemajik.herokuapp.com/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Note-taker</h1>
          <img src="/assets/images/note-taker.jpg" alt="Note-taker" />
          <div className="flex justify-between pt-2">
            <a className="" href="#">
              github
            </a>
            <a href="#">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Daily Planner</h1>
          <img src="/assets/images/planner.jpg" alt="daily planner" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/Mikerawl/daily-schedule-5">
              github
            </a>
            <a href="https://mikerawl.github.io/daily-schedule-5/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Play Me</h1>
          <img src="/assets/images/play-me.jpg" alt="PlayMe" />
          <div className="flex justify-between pt-2">
            <a className="" href="https://github.com/caitlinw29/PlayMe">
              github
            </a>
            <a href="https://caitlinw29.github.io/PlayMe/">Live link</a>
          </div>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col">
          <h1 className="text-2xl pb-2">Weather</h1>
          <img src="/assets/images/weather.jpg" alt="weather" />
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
