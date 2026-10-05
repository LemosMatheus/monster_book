import { Button } from "@base-ui/react/button";
import { BowArrow } from "lucide-react";
import { NavLink } from "react-router";
import { useHeader } from "./header.hook";

export function Header() {
	const { navegation } = useHeader();

	return (
		<header className="w-full h-auto px-6 py-2 flex items-center justify-between bg-black/80 border-[#C8232C]/90 border-b-4 ">
			<div className="flex items-center space-x-3">
				<div className="w-9 h-9  border border-[#F5EEDC] flex items-center justify-center bg-[#24282F] text-[#F5EEDC]">
					<BowArrow />
				</div>
				<div className="flex flex-col items-start">
					<span className=" font-bold text-lg tracking-wide text-[#F5EEDC]">
						MONSTER BOOK
					</span>
					<span className="text-[10px] text-[#F5EEDC]">
						Monster Hunter guide
					</span>
				</div>
			</div>

			<nav className="hidden md:flex items-center gap-6  text-sm  font-medium">
				{navegation.map((item) => {
					return (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`relative  ${isActive ? "text-[#F5EEDC]" : "text-slate-500 group hover:text-[#F5EEDC]"} inline-block  pb-1 hover:scale-110 transition-all duration-300`
							}
						>
							{item.name}
						</NavLink>
					);
				})}
			</nav>

			<div className="flex items-center space-x-3">
				<Button className="px-3 py-1.5 text-sm bg-[#24282F] hover:bg-[#2d323b] text-gray-200 border border-[#8C6F4B]/40 rounded-md transition">
					
				</Button>
			</div>
		</header>
	);
}
