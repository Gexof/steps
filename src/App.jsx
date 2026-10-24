const messages = ["Learn React", "Apply for Jobs", "Invest your new income"];

function App() {
  const step = 2;

  return (
    <div>
      <div>
        <div
          className={`${step >= 1 ? "bg-amber-700 text-white" : "bg-zinc-400"}`}
        >
          1
        </div>
        <div
          className={`${step >= 2 ? "bg-amber-700 text-white" : "bg-zinc-400"}`}
        >
          2
        </div>
        <div
          className={`${step >= 3 ? "bg-amber-700 text-white" : "bg-zinc-400"}`}
        >
          3
        </div>
      </div>

      <p>
        Step {step}: {messages[step - 1]}
      </p>

      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
