"use client";
import { User } from "lucide-react";
import Image from "next/image";
import Button from "../main/Button";
import { LoginDialog } from "@/components/authentication/LoginDialog";
import { useState } from "react";
import { SignUpDialog } from "@/components/authentication/SignUpDialog";
import { CreatePasswordDialog } from "@/components/authentication/CreatePasswordDialog";

export default function LandingHeader() {
  //region hooks
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);
  const [isCreatePasswordDialogOpen, setIsCreatePasswordDialogOpen] =
    useState(false);
  //endregion

  //region function
  function openLoginDialog() {
    setIsLoginDialogOpen(true);
    // router.push("/dashboard");
  }
  function handleLogin() {
    setIsCreatePasswordDialogOpen(true);
    setIsSignupDialogOpen(false);
  }

  function handleDialogChange(changeTo: string) {
    if (changeTo === "signup") {
      setIsSignupDialogOpen(true);
      setIsLoginDialogOpen(false);
    } else if (changeTo === "login") {
      setIsSignupDialogOpen(false);
      setIsLoginDialogOpen(true);
    }
  }
  //endregion
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center container mx-auto py-4">
        <Button
          text="ورود/ ثبت نام"
          rightIcon={<User />}
          onClick={openLoginDialog}
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
        <LoginDialog
          setIsOpen={setIsLoginDialogOpen}
          isOpen={isLoginDialogOpen}
          openSignUp={() => handleDialogChange("signup")}
        />
        <SignUpDialog
          isOpen={isSignupDialogOpen}
          setIsOpen={setIsSignupDialogOpen}
          openSignUp={() => handleDialogChange("login")}
          handleLoginClick={handleLogin}
        />
        <CreatePasswordDialog
          isOpen={isCreatePasswordDialogOpen}
          setIsOpen={setIsCreatePasswordDialogOpen}
        />
      </div>
    </header>
  );
}
