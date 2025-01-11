import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/router";

import { HamMenuIcon } from "@/components/icons";
import { navMenuItems } from "@/data";

function Navbar() {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="cursor-pointer">
          <HamMenuIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation Menu">
        {navMenuItems.map((item) => (
          <DropdownItem key={item.id} onClick={() => handleNavigate(item.href)}>
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Navbar;
