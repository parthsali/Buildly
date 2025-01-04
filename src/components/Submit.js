// submit.js

export const SubmitButton = () => {
  return (
    <div className="fixed bottom-2 w-screen flex items-center justify-center">
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </div>
  );
};
