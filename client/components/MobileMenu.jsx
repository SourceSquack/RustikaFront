import React from "react";
import { useRouter } from "next/router";

const MobileMenu = ({ visible }) => {
  const router = useRouter();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-800 w-56 absolute top-8 left-0 py-5 flex-col border-2 rounded-md border-amber-600 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">Menú</div>
        <div className="px-3 text-center text-white hover:underline">Bar</div>
        <div className="px-3 text-center text-white hover:underline">
          Contacts
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
