// TextNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      id={id}
      label="Text Node"
      handles={[
        { type: "source", position: Position.Right, id: "output", offset: 50 },
      ]}
    >
      <label className="block text-gray-300 text-sm">
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </BaseNode>
  );
};
