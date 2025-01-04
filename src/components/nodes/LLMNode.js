// LLMNode.js
import React from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

import { AiOutlineOpenAI } from "react-icons/ai";

export const LLMNode = ({ id, icon }) => {
  return (
    <BaseNode
      id={id}
      icon={icon || <AiOutlineOpenAI />}
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
