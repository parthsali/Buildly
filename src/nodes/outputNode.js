// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-52 h-24 border border-gray-700 bg-gray-800 p-3 rounded-lg shadow-lg">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="bg-gray-600 w-3 h-3"
      />
      <div className="text-white font-semibold mb-2">
        <span>Output Node</span>
      </div>
      <div className="space-y-3">
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
            value={outputType}
            onChange={handleTypeChange}
            className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
};
