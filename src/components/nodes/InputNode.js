// InputNode.js

import React, { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Input Node"
      handles={[
        { type: "source", position: Position.Right, id: "value", offset: 50 },
      ]}
    >
      {/* Input Fields */}
      <label className="block text-gray-900 text-sm font-medium">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
      </label>
      <label className="block text-gray-900 text-sm font-medium">
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
