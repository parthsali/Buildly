// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="w-24 h-16 border border-gray-300 bg-white rounded-lg shadow-lg cursor-grab flex items-center justify-center flex-col"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="text-gray-900 font-semibold flex items-center gap-1">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};
