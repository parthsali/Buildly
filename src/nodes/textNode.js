// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-52 h-24 border border-gray-700 bg-gray-800 p-3 rounded-lg shadow-lg">
      <div className="text-white font-semibold mb-2">
        <span>Input Node</span>
      </div>
      <div className="space-y-3">
        <label className="block text-gray-300 text-sm">
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
            className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="bg-gray-600 w-3 h-3"
      />
    </div>
  );
};
