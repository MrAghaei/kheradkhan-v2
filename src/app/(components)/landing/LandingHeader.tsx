import { User } from "lucide-react";
import Image from "next/image";

export default function LandingHeader() {
    return (
        <header className="bg-white">
            <div className="flex justify-between items-center container mx-auto py-4">
                <button className="flex items-center gap-1 bg-primary text-white px-2 py-2 rounded-md">
                    ورود/ ثبت نام
                    <User />
                </button>
                <Image className="cursor-pointer" src="/mainLogo.png" alt="logo" width={83} height={80} />
            </div>

        </header>
    )

}