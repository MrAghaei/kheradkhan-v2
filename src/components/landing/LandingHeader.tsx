"use client";
import { User } from "lucide-react";
import Image from "next/image";
import Button from "../main/Button";
import { useRouter } from "next/navigation";
import { LoginDialog } from "@/components/main/LoginDialog";
import { useState } from "react";

export default function LandingHeader() {
  //region hooks
  const [isOpen, setIsOpen] = useState(false);
  //endregion
  const router = useRouter();
  //region function
  function handleLogin() {
    setIsOpen(true);
    // router.push("/dashboard");
  }

  //endregion
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center container mx-auto py-4">
        <Button
          text="ورود/ ثبت نام"
          rightIcon={<User />}
          onClick={handleLogin}
          type={"primary"}
        />
        <Image
          loading={"eager"}
          className="cursor-pointer"
          src="/mainLogo.png"
          alt="logo"
          width={83}
          height={80}
        />
        <LoginDialog setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
}
