"use client";

import { useAppContext } from "@/context/appContext";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HamburgerIcon() {
  const { dispatch } = useAppContext();
  return (
    <RxHamburgerMenu
      onClick={() => dispatch("TOGGLE_SIDEBAR")}
      size={26}
      className="cursor-pointer text-gold-500 md:hidden"
    />
  );
}
