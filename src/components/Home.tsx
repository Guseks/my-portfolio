import React from "react";
import linkedInImage from "../assets/LinkedIn.jpg";

const Home = () => {
  return (
    <div className="w-full flex-col rounded-md flex gap-16 items-center pb-10">
      <div className="w-full flex justify-center gap-20 border-b-4 border-stone-950 pt-8 pb-16">
        <div className="flex justify-center gap-10 text-stone-950 rounded-md">
          <div className="flex flex-col w-80 p-4 justify-center gap-3">
            <h2 className="text-4xl mb-3 font-bold">Gustaf Ekström</h2>
            <p className="font-bold text-lg">Web Developer, Fullstack </p>
            <div className=" flex gap-4">
              <button className="p-2 border-2 border-stone-950 rounded-md font-bold hover:bg-stone-950 hover:text-stone-200">
                Download CV
              </button>
              <button className="p-2 border-2 rounded-md border-stone-950 font-bold hover:bg-stone-950 hover:text-stone-200">
                Contact me!
              </button>
            </div>
          </div>

          <img className="w-72 rounded-md" src={linkedInImage} />
          <div className="text-stone-950 px-10 py-5 rounded-md flex flex-col gap-2">
            <h2 className="font-bold text-xl">Technical Experience</h2>
            <ul className="list-disc flex flex-col gap-2 ml-8 font-semibold">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-10  text-stone-200 px-20">
        <div className="w-3/4 bg-stone-950 p-10 rounded-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="gap-5 grid grid-cols-3">
            <div className="h-96 border-2 rounded-md"></div>
            <div className="h-96 border-2 rounded-md"></div>
            <div className="h-96 border-2 rounded-md"></div>
          </div>
        </div>
        <div className="p-10 w-1/4 h-96 bg-stone-950 rounded-md flex flex-col gap-5">
          <h2 className="text-2xl font-bold py-2 border-b-2">About me</h2>
          <div>
            <p className="font-semibold">
              Some info about myself as a developer. Maybe something from
              LinkedIn?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
