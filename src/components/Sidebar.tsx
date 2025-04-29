import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import {
  X,
  ListFilter,
  Search,
  Code,
  Star,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { problems } from "../constants/problems";
import { ProblemContext } from "../context/problemContext";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("Sidebar must be used within a ProblemContextProvider");
  }

  const { setProblem } = context;

  const handleProblemChange = (index: number) => {
    setProblem({
      runCode: false,
      problemNo: index,
    });
    setOpen(false);
  };

  // Function to get badge color based on difficulty
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "medium":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "hard":
        return "bg-rose-50 text-rose-700 border border-rose-200";
      default:
        return "bg-blue-50 text-blue-700 border border-blue-200";
    }
  };

  // Function to get tag color variations
  const getTagColor = (index: number) => {
    const colors = [
      "bg-violet-50 text-violet-700 border border-violet-200",
      "bg-sky-50 text-sky-700 border border-sky-200",
      "bg-indigo-50 text-indigo-700 border border-indigo-200",
      "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200",
      "bg-teal-50 text-teal-700 border border-teal-200",
    ];
    return colors[index % colors.length];
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-[420px] transform transition duration-400 ease-out data-closed:-translate-x-full sm:duration-500 shadow-2xl"
            >
              <TransitionChild>
                <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 duration-300 ease-in-out data-closed:opacity-0 sm:-mr-10 sm:pl-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-full p-1.5 bg-white/20 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <X aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex font-inter h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-6 pt-6 pb-5 border-b border-gray-100">
                  <DialogTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="flex items-center justify-center bg-blue-50 text-blue-600 p-2 rounded-lg mr-3">
                      <Code className="h-5 w-5" />
                    </div>
                    Problem Explorer
                  </DialogTitle>

                  <div className="mt-5 relative">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
                          placeholder="Search problems..."
                        />
                      </div>
                      <button className="p-2.5 text-gray-600 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <ListFilter className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex-1 px-5 py-5">
                  <div className="space-y-3.5">
                    {problems?.map((item, index) => (
                      <div
                        onClick={() => handleProblemChange(index)}
                        key={index}
                        className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-200 group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex-shrink-0 bg-blue-50 text-blue-600 p-1.5 rounded-md">
                              <BookOpen className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                                {item.title}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2.5">
                                <span
                                  className={`text-xs py-1 px-2.5 rounded-full font-medium flex items-center ${getDifficultyColor(
                                    item.difficulty
                                  )}`}
                                >
                                  <Star className="h-3 w-3 mr-1" />
                                  {item.difficulty}
                                </span>

                                {item.tags?.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className={`text-xs py-1 px-2.5 rounded-full font-medium ${getTagColor(
                                      tagIndex
                                    )}`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors duration-200 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                  <div className="text-xs text-gray-500 text-center">
                    <span className="font-medium">Pro Tip:</span> Use keyboard
                    shortcut{" "}
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs mx-1">
                      Ctrl
                    </kbd>
                    +
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs mx-1">
                      P
                    </kbd>{" "}
                    to open this panel
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Sidebar;
