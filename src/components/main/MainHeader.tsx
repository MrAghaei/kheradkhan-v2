"use client";
import Image from "next/image";
import { ChevronDown, Ellipsis, User } from "lucide-react";
import Button from "@/components/main/Button";
import SearchBox from "@/components/main/SearchBox";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { ConfirmDialog } from "@/components/dialogs/ConfirmDialog";

function MainHeader() {
  //region data
  const buttonsData = [
    // {
    //   id: 1,
    //   text: "کتابخانه",
    //   icon: "/libraryIcon.svg",
    //   navigateTo: "/dashboard/library",
    // },
    {
      id: 2,
      text: "هایلایت ها",
      icon: "/highlightIcon.svg",
      navigateTo: "/dashboard/highlights",
    },
    {
      id: 3,
      text: "مرور روزانه",
      icon: "/reviewIcon.svg",
      navigateTo: "/dashboard/review",
    },
    {
      id: 4,
      text: "برچسب ها",
      icon: "/tagIcon.svg",
      navigateTo: "/dashboard/tags",
    },
    {
      id: 5,
      text: "مورد علاقه ها",
      icon: "/favoriteIcon.svg",
      navigateTo: "/dashboard/favorites",
    },
  ];
  //endregion

  //region hooks
  const router = useRouter();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  //endregion

  //region function
  function handleButtonsNavigation(navigateTo: string) {
    router.push(navigateTo);
  }
  //endregion

  return (
    <header className="bg-white">
      <div className="flex flex-col justify-between container mx-auto py-4 ">
        {/*upper side*/}
        <div className="flex justify-between items-center w-full border-b">
          <div className="flex gap-10">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex gap-1">
                  <ChevronDown className="text-primary" />
                  مریم بهرامی
                  <User strokeWidth={"1px"} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col px-3 py-3 gap-3">
                <DropdownMenuItem
                  onClick={() =>
                    handleButtonsNavigation("/dashboard/usersetting")
                  }
                  className="cursor-pointer border-b text-sm"
                >
                  تنظیمات حساب کاربری
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setTimeout(() => setIsLogoutDialogOpen(true), 1)
                  }
                  className="cursor-pointer text-sm"
                >
                  خروج از حساب کاربری
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ConfirmDialog
              message={"آیا میخواهید از حساب خود خارج شوید؟"}
              title={"خروج از حساب کاربری"}
              open={isLogoutDialogOpen}
              onOpenChange={setIsLogoutDialogOpen}
              onConfirm={() => console.log("logged out")}
            />
            <button
              onClick={() => handleButtonsNavigation("/dashboard/mylibrary")}
              className="flex gap-1"
            >
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
              onClick={() => handleButtonsNavigation(data.navigateTo)}
              key={data.id}
              text={data.text}
              type={"dashboard"}
              leftIcon={
                <Image src={data.icon} alt={data.icon} width={24} height={24} />
              }
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
