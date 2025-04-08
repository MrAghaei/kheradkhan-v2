"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function LoginDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="absolute">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden border rounded-lg">
          <div className="p-6 bg-white" dir="rtl">
            <h2 className="text-xl font-medium text-center mb-6 border-b pb-4">
              ورود به حساب کاربری
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="نام کاربری"
                  className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-right placeholder:text-gray-500 focus:ring-0 focus:border-teal-500 focus:outline-none"
                />

                <div className="space-y-2">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور"
                    className="w-full bg-transparent border-0 border-b border-gray-300 py-2 px-0 text-right placeholder:text-gray-500 focus:ring-0 focus:border-teal-500 focus:outline-none"
                  />
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-sm text-teal-500 hover:text-teal-600"
                    >
                      فراموشی رمز کاربری!
                    </a>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-teal-200 hover:bg-teal-300 text-teal-800 font-medium"
                onClick={() => console.log("Login clicked")}
              >
                ورود
              </Button>

              <div className="flex items-center gap-4 my-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-gray-500">یا</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 border rounded-md p-2 hover:bg-gray-50"
                onClick={() => console.log("Google login clicked")}
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google logo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span>ورود با حساب گوگل</span>
              </button>

              <div className="text-center text-sm text-gray-600 mt-4">
                <span>اگر تو ... حساب کاربری نداری، ثبت نام کن:</span>{" "}
                <a href="#" className="text-teal-500 hover:text-teal-600">
                  ایجاد حساب کاربری
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
