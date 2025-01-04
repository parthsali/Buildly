import React, { useState } from "react";
import { BaseNode } from "./BaseNode";
import { CiCircleRemove } from "react-icons/ci";
import { Position } from "reactflow";

export const DataLoaderNode = ({ id, data }) => {
  const [selectedOption, setSelectedOption] = useState(data?.loadType || "csv");

  return (
    <BaseNode
      id={id}
      label="Data Loader"
      icon={<CiCircleRemove />}
      handles={[
        { type: "target", position: Position.Left, id: "input", offset: 50 },
        { type: "source", position: Position.Right, id: "output", offset: 50 },
      ]}
    >
      <div className="text-gray-900 text-sm font-medium">
        <label className="block">
          Data Loader:
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="csv">Load CSV</option>
            <option value="json">Load JSON</option>
            <option value="file">Load File</option>
            <option value="url">Load URL</option>
            <option value="api">Load API</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
