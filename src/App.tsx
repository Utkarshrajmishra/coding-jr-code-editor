import { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import Problem from "./components/Problem";
import TestCase from "./components/Testcase";
import Submit from "./components/SubmitStatus";

function App() {
  const [submit, setSubmit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showProblem, setShowProblem] = useState(true);

  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden">
        <Header
          setShowProblem={setShowProblem}
          showProblem={showProblem}
          isMobile={isMobile}
        />

        <div className="flex flex-1 flex-col lg:flex-row w-full overflow-hidden">
          {/* Conditional rendering for mobile */}
          {(!isMobile || (isMobile && showProblem)) && (
            <div
              className={`${
                isMobile ? "w-full" : "w-[450px] lg:min-w-[450px]"
              }`}
            >
              {!submit ? <Problem /> : <Submit />}
            </div>
          )}

          {(!isMobile || (isMobile && !showProblem)) && (
            <div className="flex flex-col flex-1">
              <CodeEditor setSubmit={setSubmit} isMobile={isMobile} />
              <TestCase isMobile={isMobile} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
