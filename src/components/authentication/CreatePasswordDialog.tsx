"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "./LoginDialog.scss";

export function CreatePasswordDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  //region hooks

  const [password, setPassword] = useState("");

  //endregion
  return (
    <div className="absolute">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white overflow-hidden border rounded-lg">
          <div className="p-6" dir="rtl">
            <h2 className="text-xl text-secondary text-center mb-10 border-b border-primary200 pb-4">
              رمز کاربری خود را بسازید
            </h2>

            <p className="text-text1 text-sm flex justify-center mb-10">
              برای حساب کاربری خود رمز کاربری انتخاب کنید.
            </p>
            <div className="space-y-6">
              <div className="space-y-4">
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
                </div>
              </div>

              <Button
                className="w-full bg-primary300 hover:bg-primary text-white font-medium"
                onClick={() => console.log("Login clicked")}
              >
                ذخیره تغییرات
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
