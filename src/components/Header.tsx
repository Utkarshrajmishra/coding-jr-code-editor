import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
      const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header className="h-12 px-6 text-zinc-100 gap-4 font-inter bg-slate-950 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
        <Sidebar open={openSidebar} setOpen={setOpenSidebar}/>
        <Menu onClick={()=>setOpenSidebar(true)}/>
          <p className="text-sm font-light">Problem List</p>
        </div>
        <div className="h-4 w-[1px] bg-[#656565]"></div>
        <div className="text-[0.83rem] gap-3 flex items-center ">
          <p className="">DSA</p>
          <MdKeyboardArrowRight className="size-4 text-[#656565]" />
          <p className="">Coding Problem</p>
          <MdKeyboardArrowRight className="size-4 text-[#656565]" />

          <p className="font-light">Two Sum</p>
        </div>
      </div>
      <div className="border-[1px] flex items-center gap-1 text-xs px-4 border-zinc-500 p-1 rounded">
        <MdLightMode />
        <p>Light</p>
      </div>
    </header>
  );
};

export default Header;
