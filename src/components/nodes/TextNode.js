// TextNode.js
import React, { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

import { CiText } from "react-icons/ci";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      id={id}
      icon={<CiText />}
      label="Text Node"
      handles={[
        { type: "source", position: Position.Right, id: "output", offset: 50 },
      ]}
    >
      <label className="block text-gray-900 text-sm font-medium">
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 focus:outline focus:outline-2 focus:outline-indigo-600"
        />
      </label>
    </BaseNode>
  );
};
