import {SearchMonster} from "./components/search_monster"

export function Bestiary() {

    return (
        <section className="h-full w-[90%] m-2">
            <div className="my-6">
                <div className="w-full flex justify-between items-end text-[#292C25] ">
                    <p className="font-bold text-5xl">HUNTER'S BESTIARY</p>
                    <p className="text-xl ">The hunter's field notes</p>
                </div>
                    <div className="w-full flex justify-between items-end text-[#6C695C] mt-2">
                    <p className="text-sm font-light">The Guild Encyclopedia of Known Creatures</p>
                    <p className="text-[13px] font-extralight ">CREATURES • HABITATS • WEAKNESSES</p>
                </div>
            </div>
            <SearchMonster />
        </section>
    )
}