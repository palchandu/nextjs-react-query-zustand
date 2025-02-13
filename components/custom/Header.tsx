import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CartSheet } from "./CartSheet";
const Header = () => {
  return (
    <>
      <nav className="flex justify-between px-2 pt-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} href="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} href="/users">
                Users
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} href="/product">
                Products
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <CartSheet />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
};

export default Header;
