"use client";
import { User } from "lucide-react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/navigation";

export default function LandingHeader() {
  const router = useRouter();
  //region function
  function handleLogin() {
    router.push("/dashboard");
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
      </div>
    </header>
  );
}
