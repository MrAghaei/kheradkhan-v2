"use client";

import { useState } from "react";
import { Eye, LogOut, Pencil, Settings, User } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Button from "@/components/main/Button";

export default function UserSettings() {
  //region hooks
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [sliderValue, setSliderValue] = useState(5);
  //endregion

  //region variable
  const TICKS = [
    { value: 0, label: "هیچی" },
    { value: 5, label: "۵" },
    { value: 15, label: "۱۵" },
    { value: 25, label: "۲۵" },
    { value: 40, label: "۴۰" },
  ];
  const sliderMinValue = 0;
  const sliderMaxValue = 40;
  const isSliderInverted = true;
  //endregion
  return (
    <div className="mx-auto max-w-6xl min-h-screen p-4 md:p-8" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Right Side: Navigation and Header */}
        <div className="md:order-1">
          {/* Header */}
          <div className="bg-white p-4 text-center rounded-md shadow-sm mb-4">
            <h2 className="text-lg font-medium">مریم بهرامی</h2>
          </div>

          {/* Navigation Sidebar */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <nav className="space-y-4">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center justify-between border-b pb-4 w-full text-right ${
                  activeTab === "profile" ? "text-primary" : "text-text1"
                }`}
              >
                <User
                  className={`h-5 w-5 ${activeTab === "profile" ? "text-primary" : "text-text1"}`}
                />
                <span className="flex-1 mr-3">اطلاعات کاربر</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center justify-between border-b pb-4 w-full text-right ${
                  activeTab === "settings" ? "text-primary" : "text-gray-700"
                }`}
              >
                <Settings
                  className={`h-5 w-5 ${activeTab === "settings" ? "text-primary" : "text-text1"}`}
                />
                <span className="flex-1 mr-3">تنظیمات مرور روزانه</span>
              </button>

              <button className="flex items-center justify-between w-full text-right text-gray-700">
                <LogOut className="h-5 w-5 text-text1" />
                <span className="flex-1 mr-3">خروج از حساب کاربری</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Left Side: Content and Header */}
        <div className="md:col-span-2 md:order-2">
          {/* Header */}
          <div className="bg-primary50 p-4 text-right rounded-md shadow-sm mb-4">
            <h2 className="text-lg font-medium">
              {activeTab === "profile"
                ? "اطلاعات کاربری"
                : "تنظیمات مرور روزانه"}
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col bg-white px-12 py-10 rounded-md shadow-sm">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium">نام کاربری</h2>
                  <button className="text-blue-500 flex items-center text-sm">
                    <Pencil className="h-4 w-4 ml-1" />
                    ویرایش
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-right block text-gray-600"
                    >
                      نام کاربری
                    </label>
                    <input
                      id="name"
                      defaultValue="مریم بهرامی"
                      className="w-full text-right border-b border-gray-300 rounded-none px-0 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-right block text-gray-600"
                    >
                      ایمیل
                    </label>
                    <input
                      id="email"
                      type="email"
                      defaultValue="saharbahar@gmail.com"
                      className="w-full text-right border-b border-gray-300 rounded-none px-0 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-right block text-gray-600"
                    >
                      رمز عبور
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        defaultValue="••••••"
                        className="w-full text-right border-b border-gray-300 rounded-none px-0 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                      >
                        <Eye className="h-5 w-5 text-text1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-8">
                <h2 className="text-lg font-medium mb-8 border-b border-primary pb-4">
                  مرور روزانه
                </h2>

                {/* slider + labels */}
                <div className="w-full relative" dir="ltr">
                  <Slider
                    defaultValue={[sliderValue]}
                    min={0}
                    max={40}
                    step={5}
                    onValueChange={(val) => setSliderValue(val[0])}
                    className="w-full"
                    inverted={true}
                  />

                  {/* tick labels */}
                  <div className="absolute left-0 right-0 top-full mt-2 h-0">
                    {TICKS.map(({ value, label }) => {
                      const rawPct =
                        ((value - sliderMinValue) /
                          (sliderMaxValue - sliderMinValue)) *
                        100;
                      const pct = isSliderInverted ? 100 - rawPct : rawPct;

                      return (
                        <span
                          key={value}
                          className="absolute text-[10px] text-text1 whitespace-nowrap"
                          style={{
                            left: `${pct}%`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex pt-16 justify-end ">
                  <Button text={"ذخیره"} type={"primary"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
