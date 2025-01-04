// LLMNode.js
import React from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="LLM Node"
      handles={[
        { type: "target", position: Position.Left, id: "system", offset: 33 },
        { type: "target", position: Position.Left, id: "prompt", offset: 66 },
        {
          type: "source",
          position: Position.Right,
          id: "response",
          offset: 50,
        },
      ]}
    >
      <div className="text-gray-900 text-base">
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
