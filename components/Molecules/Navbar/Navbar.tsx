import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import Link from "next/link";

import { HamMenuIcon } from "@/components/icons";
import { navMenuItems } from "@/data";

function Navbar() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="cursor-pointer">
          <HamMenuIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation Menu">
        {navMenuItems.map((item) => (
          <DropdownItem key={item.id}>
            <Link className="w-full h-full block" href={item.href}>
              {item.title}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Navbar;
