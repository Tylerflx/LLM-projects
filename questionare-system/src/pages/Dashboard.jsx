import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Linkedin } from 'lucide-react';


const Dashboard = () => {

  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <section>
      {/* Container */}
      <div className={`${darkMode ? "dark" : "light"} bg-muted min-h-screen mx-auto w-full max-w-8xl px-5 py-12 md:px-10 md:py-16 lg:py-20`}>
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-green-400/20 dark:bg-green-700 px-3 py-1">
              <div className="mr-1 h-2 w-2 rounded-full bg-green-400 dark:bg-green-300"></div>
              <p className="text-sm text-green-500 dark:text-green-300">Passing</p>
            </div>
            <p className="text-sm text-gray-500 sm:text-xl">
              Project 1 out of 5
            </p>
            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold dark:text-secondary md:text-6xl lg:mb-8">
              Q&A Retrieval System
            </h1>
            <p className="text-sm text-textColor dark:textColor sm:text-xl">
              [Description about the project]
            </p>
            {/* Divider */}
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            <div className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base lg:mb-8">
              <p>
                <strong>07-19-2024: </strong>Started the project
              </p>
              <p>
                <strong>07-23-2024: </strong>Expected deadline date
              </p>
            </div>
            {/* Link */}
            <a
              href="/projects"
              className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12"
            >
              <p>All Projects</p>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                alt=""
                className="inline-block"
              />
            </a>
            {/* Buttons */}
            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-4 rounded-md bg-background dark:bg-secondary px-6 py-3 text-white"
              >
                <Linkedin/>
                <p>LinkedIn</p>
              </a>
              <a
                href="#"
                className="flex gap-4 rounded-md border border-solid border-black px-6 py-3"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Resume</p>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
