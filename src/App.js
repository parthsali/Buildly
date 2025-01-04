import { PipelineUI } from "./components/UI";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <Topbar />
      <PipelineUI />
    </div>
  );
}

export default App;
