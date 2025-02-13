"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { cartStore, CartType } from "@/stores/cart.store";
export function CartSheet() {
  const cart: CartType[] = cartStore((state) => state.cart);
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger className="flex">
          <ShoppingCart />
          <sup>
            <Badge>{cart.length}</Badge>
          </sup>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Cart Items</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4"></div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
