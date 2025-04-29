import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useContext, useState } from "react";
import { Menu, Code, ChevronLeft } from "lucide-react";
import { problems } from "../constants/problems";
import { ProblemContext } from "../context/problemContext";

type HeaderProps={
  setShowProblem:(show:boolean)=>void;
  showProblem:boolean;
  isMobile:boolean;
}

const Header = ({ setShowProblem, showProblem, isMobile }:HeaderProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const context = useContext(ProblemContext);

  if (!context) {
    throw new Error("Problem Context not found");
  }

  const { problem } = context;

  return (
    <header className="h-12 px-2 sm:px-6 text-zinc-100 gap-2 sm:gap-4 font-inter bg-slate-950 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
        <div className="flex items-center gap-2">
          <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
          <Menu
            onClick={() => setOpenSidebar(true)}
            className="cursor-pointer"
          />
          <p className="text-xs sm:text-sm font-light hidden sm:block">
            Problem List
          </p>
        </div>

        <div className="h-4 w-[1px] bg-[#656565] hidden sm:block"></div>

        <div className="text-[0.7rem] sm:text-[0.83rem] gap-1 sm:gap-3 flex items-center overflow-hidden">
          <p className="hidden sm:block">DSA</p>
          <MdKeyboardArrowRight className="size-4 text-[#656565] hidden sm:block" />
          <p className="hidden sm:block">Coding Problem</p>
          <MdKeyboardArrowRight className="size-4 text-[#656565] hidden sm:block" />
          <p className="font-light truncate">
            {problems[problem.problemNo].title}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isMobile && (
          <button
            onClick={() => setShowProblem(!showProblem)}
            className="flex items-center justify-center text-xs border border-zinc-500 p-1 rounded"
          >
            {showProblem ? (
              <>
                <Code className="h-3 w-3 mr-1" />
                <span>Editor</span>
              </>
            ) : (
              <>
                <ChevronLeft className="h-3 w-3 mr-1" />
                <span>Problem</span>
              </>
            )}
          </button>
        )}

        <div className="border-[1px] flex items-center gap-1 text-xs px-2 sm:px-4 border-zinc-500 p-1 rounded">
          <MdLightMode className="h-3 w-3" />
          <p className="hidden sm:block">Light</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
