import React, { useContext, useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { GrPowerReset } from "react-icons/gr";
import { getDefaultCode, languageExtensions } from "../lib/utils";
import { ProblemContext } from "../context/problemContext";

type CodeEditorProps = {
  setSubmit: (submit: boolean) => void;
  isMobile?: boolean;
};

const CodeEditor = ({ setSubmit, isMobile }: CodeEditorProps) => {
  const [value, setValue] = useState("console.log('hello world!');");
  const [language, setLanguage] = useState("javascript");
  const [editorHeight, setEditorHeight] = useState("300px");

  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("Problem Context not found");
  }

  const { setProblem } = context;

  // Adjust editor height based on screen size
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        // Mobile: smaller height
        setEditorHeight("550px");
      } else {
        setEditorHeight("300px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const onChange = React.useCallback((val: string) => {
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
    <section className="flex flex-col flex-grow">
      <div className="h-auto sm:h-12 py-2 sm:py-0 justify-between px-2 bg-neutral-100 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-0 w-full">
        <div className="text-xs">
          <select
            value={language}
            onChange={handleLangChange}
            className="text-xs text-zinc-700 border border-zinc-400 py-1 sm:py-[6px] px-2 sm:px-3 rounded font-inter"
          >
            <option value="javascript">Javascript</option>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center justify-center p-1 sm:p-1.5 rounded hover:bg-neutral-200">
            <GrPowerReset className="text-neutral-500 h-3 w-3 sm:h-4 sm:w-4" />
          </button>

          <button
            onClick={runCode}
            className="text-xs cursor-pointer text-zinc-700 border border-zinc-400 py-1 sm:py-[6px] px-2 sm:px-3 rounded font-inter"
          >
            Run Code
          </button>

          <button
            onClick={() => setSubmit(true)}
            className="text-xs cursor-pointer text-white bg-emerald-600 py-1 sm:py-[6px] px-2 sm:px-3 rounded font-inter"
          >
            Submit
          </button>
        </div>
      </div>

      <CodeMirror
        value={value}
        width="100%"
        height={editorHeight}
        extensions={[languageExtensions[language]]}
        onChange={onChange}
      />
    </section>
  );
};

export default CodeEditor;
