import React from "react";
import { useStore } from "../store";
import { EdgeText, getBezierPath } from "reactflow";
import { CiCircleRemove } from "react-icons/ci";

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  data,
}) => {
  const removeEdge = useStore((state) => state.removeEdge);

  const handleRemove = () => {
    removeEdge(id);
  };

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
      />
      <foreignObject
        width={40}
        height={40}
        x={labelX - 20}
        y={labelY - 20}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CiCircleRemove
            className="cursor-pointer text-red-500"
            onClick={handleRemove}
          />
        </div>
      </foreignObject>
    </>
  );
};
