// BaseNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, label, handles = [], children, style = "" }) => {
  return (
    <div
      className={`w-56 min-h-28 border border-gray-300 bg-white p-3 rounded-lg shadow-lg ${style}`}
      data-id={id}
    >
      <div className="text-gray-900 font-semibold mb-2">
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
            backgroundColor: "transparent",

            borderRadius: "50%",
            border: "2px solid #6366f1",
          }}
          className="bg-transparent w-3 h-3 border-2 border-indigo-600"
        />
      ))}
    </div>
  );
};
