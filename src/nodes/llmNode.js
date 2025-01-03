// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div className="w-52 h-24 border border-gray-700 bg-gray-800 p-3 rounded-lg shadow-lg">
      <div className="text-white font-semibold mb-2">
        <span>LLM Node</span>
      </div>
      <div className="space-y-3">
        <div className="text-gray-300 text-sm">
          <span>This is a LLM.</span>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
        className="bg-gray-600 w-3 h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
        className="bg-gray-600 w-3 h-3"
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="bg-gray-600 w-3 h-3"
      />
    </div>
  );
};
