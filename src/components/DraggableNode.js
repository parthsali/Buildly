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
      className="w-16 h-16 border border-gray-300 bg-white rounded-lg shadow-lg cursor-grab flex flex-col items-center justify-center p-2 hover:shadow-md outline outline-1 outline-gray-300"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="text-gray-900 flex flex-col items-center justify-center text-sm space-y-1">
        <div className="text-2xl">{icon}</div>
        <span className="text-[10px]">{label}</span>
      </div>
    </div>
  );
};
