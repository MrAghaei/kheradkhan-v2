'use client'
import { User } from "lucide-react";
import Image from "next/image";
import Button from "../Button";

export default function LandingHeader() {
    //region function
    function handleLogin() {
        console.log("login");
    }
    //endregion
    return (
        <header className="bg-white">
            <div className="flex justify-between items-center container mx-auto py-4">
                <Button text="ورود/ ثبت نام" rightIcon={<User />} onClick={handleLogin} type={'primary'}/>
                <Image className="cursor-pointer" src="/mainLogo.png" alt="logo" width={83} height={80} />
            </div>

        </header>
    )

}