import { Button } from "@base-ui/react/button";
import {NavLink} from 'react-router'
import { useHeader } from "./header.hook";

export function Header() {
    const {navegation} = useHeader();

    return (
        <header className="w-full h-auto px-6 py-4 flex items-center justify-between bg-white/5 border-[#C8232C]/90 border-b-2 ">
            <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full border border-[#8C6F4B] flex items-center justify-center bg-[#24282F] text-[#8C6F4B]">
                    <span>⚔️</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-wide">WIKI</span>
                    <span className="text-[10px] text-gray-400">Monster Hunter</span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-6  text-lg  font-medium">
                {navegation.map((item) => {
                    return (
                  <NavLink key={item.path} to={item.path} className={({ isActive}) => `relative  ${isActive ? 'text-[#d85e47] border-b' : 'text-slate-500 group hover:text-[#C8232C]'} inline-block  pb-1 hover:scale-110 transition-all duration-300`}>
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8232C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                  </NavLink>
                  )
                })}
            </nav>

            <div className="flex items-center space-x-3">
                <Button className="px-3 py-1.5 text-sm bg-[#24282F] hover:bg-[#2d323b] text-gray-200 border border-[#8C6F4B]/40 rounded-md transition">
                    Sol
                </Button>
                
            </div>
        </header>
    );
}