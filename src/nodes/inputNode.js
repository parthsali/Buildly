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
      <label className="block text-gray-300 text-sm">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block text-gray-300 text-sm">
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
