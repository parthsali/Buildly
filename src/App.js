import { PipelineUI } from "./components/UI";
import { SubmitButton } from "./components/Submit";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />

      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
