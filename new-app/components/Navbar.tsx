import Image from "next/image";
import React from "react";
import logo from "@/public/assets/olx-logo.png";
import { IoCarSportOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./ui/button";
   

const Navbar = () => {
  return (
    <>
    <div className="py-4 border-b-2">

      <div className="px-9 pb-1  justify-start items-center flex gap-10">
        <div>
          <Image
            src={logo}
            alt="OLX Logo"
            className="dark:invert"
            width={55}
            height={55}
            priority
          />
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-slate-200 p-2 rounded-full">
            <IoCarSportOutline className="text-2xl" />
          </div>
          Moters
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-slate-200 p-2 rounded-full">
            <PiBuildingApartmentFill className="text-2xl" />
          </div>
          Property
        </div>

      </div>



      <div className="py-2">
        <div className="flex items-center px-10 ">

            <div className="w-1/4 ">

        <Select>
      <SelectTrigger className="w-[300px] h-[50px]">
        <div className="flex items-center gap-2 text-md">

        <IoLocationOutline className="text-xl" />
        <SelectValue placeholder="Select a Country"  />
        </div >
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Country</SelectLabel>
          <SelectItem value="apple">Pakistan</SelectItem>
          <SelectItem value="banana">India</SelectItem>
          <SelectItem value="blueberry">Bangladesh</SelectItem>
          <SelectItem value="grapes">China</SelectItem>
          <SelectItem value="pineapple">Afghanistan</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

    <div className="w-2/4 flex items-center ">
        <input type="text" placeholder="Find Cars , Mobiles ,baiks and more..." className="flex h-12 w-full items-center  justify-between whitespace-nowrap rounded-l-md border  bg-transparent px-3 py-2 text-sm shadow-lg ring-offset-background placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1" />
        <IoIosSearch className="text-xl bg-black text-white h-12 w-12 p-2 rounded-r-md  cursor-pointer" />

    </div>
        <div className="w-1/4 flex gap-5 items-center px-10">
                <div>chat</div>
            <div>notification</div>
            <div>profile</div>
            <div><Button>+ sell </Button></div>
        </div>
            </div>

      </div>
    </div>
    </>
  );
};

export default Navbar;
