import { PipelineToolbar } from "./components/Toolbar";
import { PipelineUI } from "./components/UI";
import { SubmitButton } from "./components/Submit";

function App() {
  return (
    <div className="App">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
