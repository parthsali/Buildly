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
      <label className="block text-gray-300 text-sm">
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="block text-gray-300 text-sm">
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
