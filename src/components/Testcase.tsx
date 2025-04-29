import { useContext, useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { problems } from "../constants/problems";
import { ProblemContext } from "../context/problemContext";
import { Check } from "lucide-react";
const TestCase = () => {
  const [activeTest, setActiveTest] = useState(0);
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("Problem Context not found");
  }

  const { problem } = context;

  return (
    <section className="border-t h-[calc(100vh-349px)] overflow-y-scroll font-inter border-neutral-300 bg-neutral-100 flex flex-col">
      <div className="h-10 px-4 border-b border-neutral-200 flex items-center gap-2 bg-white">
        <AiFillCode className="size-5 text-neutral-600" />
        <p className="text-neutral-700 text-sm font-medium">Test Cases</p>
      </div>

      <div className="flex  border-b border-neutral-200 bg-white">
        {problems[problem.problemNo].testCases?.map((_, index) => (
          <button
            key={index}
            className={`px-4 flex items-center gap-2 text-[0.83rem] py-2  font-medium transition-colors ${
              activeTest === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-neutral-600 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveTest(index)}
          >
            Case {index + 1}
            {
              problem.runCode && 
              <Check className="size-4 text-emerald-700"/>
            }
          </button>
        ))}
      </div>

      {problems[0].testCases && problems[0].testCases.length > 0 && (
        <div className="p-4 overflow-auto flex-1">
          <div className="bg-white rounded-md border border-neutral-200 shadow-sm">
            <div className="p-3 border-b border-neutral-200">
              <p className="text-xs font-medium text-neutral-500 mb-2">
                EXPECTED OUTPUT:
              </p>

              <pre className="bg-neutral-50 text-zinc-800 p-2 text-xs rounded border border-neutral-200 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                {problems[problem.problemNo].testCases[activeTest].input}
              </pre>
            </div>

            <div className="p-3 text-xs">
              <p className="text-xs  font-medium text-neutral-500 mb-2">
                EXPECTED OUTPUT:
              </p>

              <pre className="bg-neutral-50 text-zinc-800 text-light  text-xs p-2 rounded border border-neutral-200 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                {problems[problem.problemNo].testCases[activeTest].output}
              </pre>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestCase;
