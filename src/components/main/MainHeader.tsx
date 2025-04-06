"use client";
import Image from "next/image";
import { ChevronDown, Search, User } from "lucide-react";
import Button from "@/components/main/Button";
import SearchBox from "@/components/main/SearchBox";

function MainHeader() {
  //region data
  const buttonsData = [
    {
      id: 1,
      text: "کتابخانه",
      icon: "/libraryIcon.svg",
    },
    {
      id: 2,
      text: "کتابخانه",
      icon: "/highlightIcon.svg",
    },
    {
      id: 3,
      text: "کتابخانه",
      icon: "/reviewIcon.svg",
    },
    {
      id: 4,
      text: "کتابخانه",
      icon: "/tagIcon.svg",
    },
    {
      id: 5,
      text: "کتابخانه",
      icon: "/favoriteIcon.svg",
    },
  ];
  //endregion

  return (
    <header className="bg-white">
      <div className="flex flex-col justify-between container mx-auto py-4 ">
        {/*upper side*/}
        <div className="flex justify-between items-center w-full border-b">
          <div className="flex gap-10">
            <button className="flex gap-1">
              <ChevronDown className="text-primary" />
              مریم بهرامی
              <User strokeWidth={"1px"} />
            </button>
            <button className="flex gap-1">
              کتابخانه من
              <Image
                src={"/myLibraryIcon.svg"}
                alt={"my library"}
                width={18}
                height={18}
              />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <SearchBox />
            <Image
              loading={"eager"}
              className="cursor-pointer"
              src="/mainLogo.png"
              alt="logo"
              width={83}
              height={80}
            />
          </div>
        </div>
        {/*bottom side*/}
        <div className="flex pt-6 pb-3" dir="rtl">
          {buttonsData.map((data) => (
            <Button
              key={data.id}
              text={data.text}
              type={"dashboard"}
              leftIcon={
                <Image
                  src={data.icon}
                  alt={"library icon"}
                  width={24}
                  height={24}
                />
              }
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
