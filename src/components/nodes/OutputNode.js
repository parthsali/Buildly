// OutputNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || "Output");
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      label="Output Node"
      handles={[
        { type: "target", position: Position.Left, id: "value", offset: 50 },
      ]}
    >
      <label className="block text-gray-900 text-sm font-medium">
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </label>
      <label className="block text-gray-900 text-sm font-medium">
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
