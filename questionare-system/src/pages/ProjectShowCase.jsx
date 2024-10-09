import React from "react";
import Cards from "../components/share/Cards";
import { ENUM_PROJECTLIST } from "../assets/projects";

const ProjectShowCase = () => {
  //get
  let projectList = ENUM_PROJECTLIST || [];

  return (
    <div className="mx-auto max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Projects Showcase
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Welcome to my LLM Projects Showcase, where I present the AI-driven
          projects I'm building as part of my learning journey with large
          language models. Explore my custom chatbots, content generators, and
          other innovative applications, each demonstrating my growing expertise
          and hands-on experience. Follow along to see how I'm applying AI to
          solve real-world problems and evolve as a developer.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectList &&
          projectList.map((item) => (
            <div key={item.id} className="rounded-[10px] min-h-[150px]">
              <Cards
                cardTitle={item.title}
                cardDescription={item.description}
                cardDate={item.date}
                cardImageUrl={item.imgUrl}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectShowCase;
