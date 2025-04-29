import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { GrPowerReset } from "react-icons/gr";

const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <section>
      <div className="h-12 justify-between px-2 bg-neutral-100 flex items-center  w-[calc(100vw-450px)]">
        <div className="text-xs">
          <select className="text-xs text-zinc-700 border-1 text-white border-zinc-400 py-[6px] px-3 rounded font-inter">
            <option>Javascript</option>
            <option>C++</option>
            <option>C</option>
            <option>Python</option>
            <option>Java</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <GrPowerReset className="text-neutral-500" />
          <button className="text-xs text-zinc-700 border-1 text-white border-zinc-400 py-[6px] px-3 rounded font-inter">
            Run Code
          </button>
          <button className="text-xs text-white bg-emerald-600 py-[6px] px-3 rounded font-inter">
            Submit Code
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        width="calc(100vw-450px)"
        height="300px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </section>
  );
};
export default CodeEditor;
