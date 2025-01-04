import React, { useState } from "react";
import { DraggableNode } from "./DraggableNode";

const categories = [
  {
    name: "General",
    nodes: [
      {
        name: "Input",
        type: "customInput",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Output",
        type: "customOutput",
        image: "https://via.placeholder.com/150",
      },
      { name: "Text", type: "text", image: "https://via.placeholder.com/150" },
    ],
  },

  {
    name: "LLMs",
    nodes: [
      {
        name: "GPT-3",
        type: "llm",
        image: "https://cdn.openai.com/research-covers/gpt-3.png",
      },
      {
        name: "GPT-4",
        type: "llm",
        image: "https://cdn.openai.com/research-covers/gpt-3.png",
      },
      {
        name: "GPT-5",
        type: "llm",
        image: "https://cdn.openai.com/research-covers/gpt-3.png",
      },
      {
        name: "GPT-6",
        type: "llm",
        image: "https://cdn.openai.com/research-covers/gpt-3.png",
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
    <div className="w-screen border border-gray-300 rounded-lg h-[20vh] bg-white">
      <div className="flex flex-col gap-4 p-3">
        <div className="flex flex-row gap-4 justify-start">
          {categories.map((category) => (
            <div key={category.name}>
              <h2
                onClick={handleChangeCategory}
                className={`cursor-pointer text-lg font-semibold ${
                  currentCategory === category.name
                    ? "text-indigo-600"
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
                      image={node.image}
                      className="rounded-md bg-white p-3 shadow-sm hover:shadow-md outline outline-1 outline-gray-300"
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
