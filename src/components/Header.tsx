import { Menu } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <header className="h-12 px-6 text-zinc-100 gap-4 font-inter bg-slate-950 flex items-center">
        <Menu className="size-5"/>
    {/* <p className="font-bold">Coding Jr</p> */}
      <div className="h-4 w-[1px] bg-[#656565]"></div>
      <div className="text-[0.83rem] gap-3 flex items-center ">
        <p className="">DSA</p>
        <MdKeyboardArrowRight className="size-4 text-[#656565]" />
        <p className="">Coding Problem</p>
        <MdKeyboardArrowRight className="size-4 text-[#656565]" />

        <p className="font-light">Two Sum</p>
      </div>
    </header>
  );
};

export default Header;
