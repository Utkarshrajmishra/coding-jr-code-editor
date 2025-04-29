import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import Problem from "./components/Problem";
import TestCase from "./components/Testcase";

function App() {
  return (
    <>
      <main className="h-screen overflow-y-hidden">
        <Header />
        <div className="flex w-full">
          <Problem />
          <div>
            <CodeEditor />
            <TestCase/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
