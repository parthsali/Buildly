import React, { useState } from "react";
import { DraggableNode } from "./DraggableNode";
import { SubmitButton } from "./Submit";

import { MdOutlineInput } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { RiAnthropicFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

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
        name: "OpenAI",
        type: "llm",
        icon: <AiOutlineOpenAI />,
      },
      {
        name: "Anthropic",
        type: "llm",
        icon: <RiAnthropicFill />,
      },
      {
        name: "Google",
        type: "llm",
        icon: <FaGoogle />,
      },
      {
        name: "Llama",
        type: "llm",
        icon: <FaMeta />,
      },
    ],
  },
  {
    name: "Data",
    nodes: [
      {
        name: "DataLoader",
        type: "dataLoader",
        icon: <MdOutlineInput />,
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
    <div className="w-[99%] mx-auto border border-gray-300 rounded-lg h-[30vh] bg-gray-50 flex flex-col justify-between items-center p-3 shadow-md">
      <div className="w-full flex justify-between items-center bg-white py-2 px-4 rounded-md shadow-sm">
        <a
          href="/"
          className="text-xl font-semibold text-gray-800 underline underline-offset-2 hover:text-gray-900"
        >
          <FaLaptopCode className="inline-block mr-2" />
          Buildly
        </a>
        <SubmitButton className="ml-auto bg-gray-800 text-white px-4 rounded-md hover:bg-gray-700" />
      </div>
      <div className="w-full flex flex-col justify-start gap-2 mt-2">
        <div className="flex flex-row gap-4 justify-start">
          {categories.map((category) => (
            <div key={category.name}>
              <h2
                onClick={handleChangeCategory}
                className={`cursor-pointer text-lg font-semibold ${
                  currentCategory === category.name
                    ? "text-gray-800 underline underline-offset-2 decoration-gray-800"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-start mt-2">
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
                      className="rounded-md bg-white p-3 shadow-sm hover:shadow-md outline outline-1 outline-gray-300 hover:bg-gray-100"
                    />
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
