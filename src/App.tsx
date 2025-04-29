import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import Problem from "./components/Problem";

function App() {
  return (
    <>
      <main className="h-screen overflow-x-hidden">
        <Header />
        <div className="flex w-full">
          <Problem />
          <CodeEditor />
        </div>
      </main>
    </>
  );
}

export default App;
