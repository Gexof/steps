import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-5">
      <div className="relative w-full max-w-xl">
        <button
          onClick={handleOpen}
          aria-label={isOpen ? "Close stepper" : "Open stepper"}
          className="absolute -right-2 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-semibold text-zinc-500 shadow-md transition hover:bg-amber-50 hover:text-amber-700"
        >
          {isOpen ? "×" : "+"}
        </button>

        {isOpen && (
          <section className="rounded-2xl bg-white p-7 shadow-xl shadow-zinc-200/70 sm:p-10">
            <div className="mb-10 flex items-center justify-between">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                      step >= number
                        ? "bg-amber-700 text-white shadow-lg shadow-amber-700/20"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {number}
                  </div>

                  {number < 3 && (
                    <div
                      className={`mx-3 h-1 flex-1 rounded-full transition-colors duration-300 ${
                        step > number ? "bg-amber-700" : "bg-zinc-100"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="min-h-36 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Step {step} of 3
              </p>

              <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                {messages[step - 1]}
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {step === 1 &&
                  "Build your foundation and master the essentials."}
                {step === 2 &&
                  "Put your skills to work and find your next opportunity."}
                {step === 3 &&
                  "Make your money work for you and plan for the future."}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                onClick={handlePrevious}
                disabled={step === 1}
                className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-35"
              >
                ← Previous
              </button>

              <button
                onClick={handleNext}
                disabled={step === 3}
                className="rounded-xl bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-700/20 transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === 3 ? "Completed ✓" : "Next →"}
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
