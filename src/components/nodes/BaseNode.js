// BaseNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, label, handles = [], children, style = "" }) => {
  return (
    <div
      className={`w-56 min-h-28 border border-gray-700 bg-gray-800 p-3 rounded-lg shadow-lg ${style}`}
      data-id={id}
    >
      <div className="text-white font-semibold mb-2">
        {label && <span>{label}</span>}
      </div>

      <div className="space-y-3">{children}</div>

      {handles.map(({ type, position, id: handleId, offset = 0, style }) => (
        <Handle
          key={handleId}
          type={type}
          position={position}
          id={`${id}-${handleId}`}
          style={{
            ...style,
            top:
              position === Position.Left || position === Position.Right
                ? `${offset}%`
                : undefined,
          }}
          className="bg-gray-600 w-3 h-3"
        />
      ))}
    </div>
  );
};
