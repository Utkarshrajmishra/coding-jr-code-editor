import React, {useContext, useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { GrPowerReset } from "react-icons/gr";
import { getDefaultCode, languageExtensions } from "../lib/utils";
import { ProblemContext } from "../context/problemContext";



const CodeEditor = () => {
  const [value, setValue] = useState("console.log('hello world!');");4
    const [language, setLanguage] = useState("javascript");
    const context=useContext(ProblemContext)

    if(!context){
      throw new Error('Problem Context not found')
    }

    const {setProblem}=context

  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedLang = e.target.value;
      setLanguage(selectedLang);
      setValue(getDefaultCode(selectedLang));
    };

    const runCode = () => {
      setProblem((prev) => ({
        problemNo: prev.problemNo,
        runCode: true,
      }));
    };


  return (
    <section>
      <div className="h-12 justify-between px-2 bg-neutral-100 flex items-center  w-[calc(100vw-450px)]">
        <div className="text-xs">
          <select
            value={language}
            onChange={handleLangChange}
            className="text-xs text-zinc-700 border-1 text-white border-zinc-400 py-[6px] px-3 rounded font-inter"
          >
            <option value="javascript">Javascript</option>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <GrPowerReset className="text-neutral-500" />
          <button onClick={runCode} className="text-xs cursor-pointer text-zinc-700 border-1 text-white border-zinc-400 py-[6px] px-3 rounded font-inter">
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
        extensions={[languageExtensions[language]]}
        onChange={onChange}
      />
    </section>
  );
};
export default CodeEditor;

