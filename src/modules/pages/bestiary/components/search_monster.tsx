import { Search } from "lucide-react";
import { Button } from "@/modules/components/ui/button";
import { Field } from "@/modules/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/modules/components/ui/input-group";

export function SearchMonster() {
	return (
		<div className="flex flex-row gap-3">
			<Field>
				<InputGroup className="bg-[#F5EEDC] border border-[#BDB298] border-dashed p-2">
					<InputGroupInput id="input-monster" placeholder="Search creature" />
					<InputGroupAddon align="inline-start">
						<Search />
					</InputGroupAddon>
				</InputGroup>
			</Field>
			<Button className="bg-[#8B3329] text-[#F5EEDC]" >Find Search</Button>
		</div>
	);
}
