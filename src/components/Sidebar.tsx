import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import { problems } from "../constants/problems";
import { ProblemContext } from "../context/problemContext";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const context = useContext(ProblemContext);

  if (!context) {
    throw new Error(
      "CounterDisplay must be used within a CounterContextProvider"
    );
  }

  const { setProblem } = context;

  const handleProblemChange = (index: number) => {
    setProblem(index);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-[420px] transform transition duration-500 ease-in-out data-closed:-translate-x-full sm:duration-700 shadow-2xl"
            >
              <TransitionChild>
                <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 duration-500 ease-in-out data-closed:opacity-0 sm:-mr-10 sm:pl-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <X aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex font-inter h-full flex-col overflow-y-scroll bg-gradient-to-br from-white to-gray-50 py-6 shadow-xl">
                <div className="px-6">
                  <DialogTitle className="text-2xl font-bold text-gray-900 border-b pb-4 mb-2">
                    Problem List
                  </DialogTitle>
                </div>
                <div className="relative mt-4 flex-1 px-4">
                  {problems?.map((item, index) => (
                    <div
                      onClick={() => handleProblemChange(index)}
                      key={index}
                      className={`py-3 px-3 rounded-lg mb-2 transition-all duration-200 cursor-pointer hover:bg-blue-50 ${
                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <div className="flex gap-2 mt-1">
                        <p className="text-xs py-[1px] px-2 bg-red-500 rounded-xl">
                          {item.difficulty}
                        </p>

                        {item.tags?.map((tag) => (
                          <p className="text-xs py-[1px] px-2 bg-red-500 rounded-xl">
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
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
