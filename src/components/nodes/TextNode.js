import React, { useState, useRef, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";
import { CiText } from "react-icons/ci";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
  const [rows, setRows] = useState(1);
  const [handles, setHandles] = useState([
    { type: "source", position: Position.Right, id: "output", offset: 50 },
  ]);
  const inputRef = useRef(null);

  // Regex to detect variables in {{variable}} format
  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;

  useEffect(() => {
    if (inputRef.current) {
      const charCount = inputRef.current.value.length;
      const newlineCount = (inputRef.current.value.match(/\n/g) || []).length;
      const maxCharsPerLine = 22;

      // Calculate number of rows based on character count and newlines
      const calculatedRows =
        Math.ceil(charCount / maxCharsPerLine) + newlineCount;
      setRows(calculatedRows);
      setDimensions({
        width: 200,
        height: 200 + 20 * (calculatedRows - 1),
      });
    }

    // Parse variables from text and update handles
    const matches = Array.from(currText.matchAll(variableRegex)).map(
      (match) => match[1]
    );

    const totalHandles = matches.length + 1; // Include source handle
    const offsetStep = 100 / (totalHandles + 1); // Calculate offset step

    const variableHandles = matches.map((variable, index) => ({
      type: "target",
      position: Position.Left,
      id: `var-${variable}`,
      offset: (index + 1) * offsetStep, // Distribute handles evenly
    }));

    setHandles([
      ...variableHandles,
      {
        type: "source",
        position: Position.Right,
        id: "output",
        offset: 50,
      },
    ]);
  }, [currText]);

  return (
    <BaseNode
      id={id}
      icon={<CiText />}
      label="Text Node"
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      handles={handles}
    >
      <label className="block text-gray-900 text-sm font-medium">
        Text:
        <textarea
          rows={rows}
          ref={inputRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            resize: "none", // Disable resize
          }}
          className="mt-1 w-full block bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 focus:outline focus:outline-2 focus:outline-indigo-600 text-wrap"
        />
      </label>
    </BaseNode>
  );
};
