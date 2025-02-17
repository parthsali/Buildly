import { PipelineUI } from "../components/UI";
import Topbar from "../components/Topbar";

export function Pipeline() {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center bg-white dark:bg-gray-800">
      <Topbar />
      <PipelineUI />
    </div>
  );
}
