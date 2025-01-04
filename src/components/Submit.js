// submit.js

import axios from "axios";
import { useStore } from "../store";

export const SubmitButton = () => {
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    const data = {
      edges: edges.map((edge) => {
        return {
          source: edge.source,
          target: edge.target,
        };
      }),
    };

    const response = await axios.post(
      "http://localhost:8000/pipelines/parse",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.status === "success") {
      if (response.data.is_dag === true) {
        alert("Data submitted successfully and it is a DAG");
      } else {
        alert("Data submitted successfully but it is not a DAG");
      }
    } else {
      alert("Data submission failed");
    }
  };

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
