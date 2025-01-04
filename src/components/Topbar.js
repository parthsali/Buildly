import React, { useState } from "react";
import { DraggableNode } from "./DraggableNode";
import { SubmitButton } from "./Submit";

import { MdOutlineInput } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { AiOutlineOpenAI } from "react-icons/ai";

const categories = [
  {
    name: "General",
    nodes: [
      {
        name: "Input",
        type: "customInput",
        icon: <MdOutlineInput />,
      },
      {
        name: "Output",
        type: "customOutput",
        icon: <MdOutlineInput />,
      },
      { name: "Text", type: "text", icon: <CiText /> },
    ],
  },

  {
    name: "LLMs",
    nodes: [
      {
        name: "GPT-3",
        type: "llm",
        icon: <AiOutlineOpenAI />,
      },
      {
        name: "GPT-4",
        type: "llm",
        icon: <AiOutlineOpenAI />,
      },
      {
        name: "GPT-5",
        type: "llm",
        icon: <AiOutlineOpenAI />,
      },
    ],
  },
];

const Topbar = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  const handleChangeCategory = (e) => {
    setCurrentCategory(e.target.innerText);
  };

  return (
    <div className="w-[99%] mx-auto border border-gray-300 rounded-lg h-[20vh] bg-white flex justify-between items-center p-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 justify-start">
          {categories.map((category) => (
            <div key={category.name}>
              <h2
                onClick={handleChangeCategory}
                className={`cursor-pointer text-lg font-semibold  ${
                  currentCategory === category.name
                    ? "text-indigo-600 underline underline-offset-2 decoration-indigo-600"
                    : "text-gray-900"
                }`}
              >
                {category.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-start">
          {categories &&
            categories
              .filter((category) => category.name === currentCategory)
              .map((category) => (
                <div className="flex flex-row gap-4" key={category.name}>
                  {category.nodes.map((node) => (
                    <DraggableNode
                      key={node.name}
                      label={node.name}
                      type={node.type}
                      icon={node.icon}
                      className="rounded-md bg-white p-3 shadow-sm hover:shadow-md outline outline-1 outline-gray-300"
                    />
                  ))}
                </div>
              ))}
        </div>
      </div>
      <SubmitButton className="ml-auto" />
    </div>
  );
};

export default Topbar;
