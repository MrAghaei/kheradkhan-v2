"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "./LoginDialog.scss";

export function SignUpDialog({
  isOpen,
  setIsOpen,
  openSignUp,
  handleLoginClick,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openSignUp: () => void;
  handleLoginClick: () => void;
}) {
  //region hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //endregion
  return (
    <div className="absolute">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white overflow-hidden border rounded-lg">
          <div className="p-6" dir="rtl">
            <h2 className="text-xl text-secondary text-center mb-10 border-b border-primary200 pb-4">
              ثبت نام و ساخت حساب کاربری
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="نام کاربری"
                  className="w-full bg-transparent border-0 border-b border-text1 py-2 px-0 text-right placeholder:text-text1 focus:ring-0 focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل"
                  className="w-full bg-transparent border-0 border-b border-text1 py-2 px-0 text-right placeholder:text-text1 focus:ring-0 focus:border-primary focus:outline-none"
                />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور"
                  className="w-full bg-transparent border-0 border-b border-text1 py-2 px-0 text-right placeholder:text-text1 focus:ring-0 focus:border-primary focus:outline-none"
                />

                <div className="space-y-2">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="تکرار رمز عبور"
                    className="w-full bg-transparent border-0 border-b border-text1 py-2 px-0 text-right placeholder:text-text1 focus:ring-0 focus:border-primary focus:outline-none"
                  />
                  <div className="flex gap-1 justify-start">
                    <input
                      type="checkbox"
                      className="text-link accent-link"
                      required
                    />
                    <p className="text-text2 text-xs">
                      قوانین استفاده از خردخوان را می‌پذیرم.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-primary300 hover:bg-primary text-white font-medium"
                onClick={handleLoginClick}
              >
                ثبت نام
              </Button>

              <div className="flex items-center gap-4 my-4">
                <div className="h-[0.2px] flex-1 bg-text1"></div>
                <span className="text-text1">یا</span>
                <div className="h-[0.2px] flex-1 bg-text1"></div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 border rounded-md p-2 hover:bg-gray-100"
                onClick={() => console.log("Google login clicked")}
              >
                <Image
                  src="/googleIcon.svg"
                  alt="Google logo"
                  width={25}
                  height={25}
                />
                <span className="text-secondary">ثبت نام با حساب گوگل</span>
              </button>

              <div className="text-center text-xs hairline-shadow pt-3 text-gray-600 mt-4">
                <span className="text-text2 ">
                  اگر تو خردخوان حساب کاربری داری، وارد شوید:
                </span>{" "}
                <a
                  onClick={openSignUp}
                  href="#"
                  className="text-link hover:text-blue-700"
                >
                  ورود به حساب کاربری
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
