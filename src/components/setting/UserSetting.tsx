"use client";

import { useState } from "react";
import { Eye, LogOut, Pencil, Settings, User } from "lucide-react";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [sliderValue, setSliderValue] = useState(5);

  // Handle slider click directly on the track
  const handleSliderTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = rect.right - e.clientX;
    const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
    const newValue = Math.round((percentage * 20) / 5) * 5;
    setSliderValue(newValue === 0 ? 5 : Math.min(newValue, 20));
  };

  return (
    <div
      className="mx-auto max-w-6xl bg-gray-100 min-h-screen p-4 md:p-8"
      dir="rtl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Right Side: Navigation and Header */}
        <div className="md:order-1">
          {/* Header */}
          <div className="bg-white p-4 text-center rounded-md shadow-sm mb-4">
            <h2 className="text-lg font-medium">مریم بهرامی</h2>
          </div>

          {/* Navigation Sidebar */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-medium">اطلاعات کاربر</h3>
              <User className="h-5 w-5 text-gray-500" />
            </div>

            <div className="h-px bg-gray-200 my-4"></div>

            <nav className="space-y-4">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center justify-between w-full text-right ${
                  activeTab === "profile" ? "text-emerald-500" : "text-gray-700"
                }`}
              >
                <User
                  className={`h-5 w-5 ${activeTab === "profile" ? "text-emerald-500" : "text-gray-500"}`}
                />
                <span className="flex-1 mr-3">اطلاعات کاربر</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center justify-between w-full text-right ${
                  activeTab === "settings"
                    ? "text-emerald-500"
                    : "text-gray-700"
                }`}
              >
                <Settings
                  className={`h-5 w-5 ${activeTab === "settings" ? "text-emerald-500" : "text-gray-500"}`}
                />
                <span className="flex-1 mr-3">تنظیمات مرور روزانه</span>
              </button>

              <button className="flex items-center justify-between w-full text-right text-gray-700">
                <LogOut className="h-5 w-5 text-gray-500" />
                <span className="flex-1 mr-3">خروج از حساب کاربری</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Left Side: Content and Header */}
        <div className="md:col-span-2 md:order-2">
          {/* Header */}
          <div className="bg-white p-4 text-center rounded-md shadow-sm mb-4">
            <h2 className="text-lg font-medium">
              {activeTab === "profile"
                ? "اطلاعات کاربری"
                : "تنظیمات مرور روزانه"}
            </h2>
          </div>

          {/* Content */}
          <div className="bg-white p-6 rounded-md shadow-sm">
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
                        <Eye className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-medium mb-8">مرور روزانه</h2>

                  <div className="space-y-6">
                    <div className="relative pt-6">
                      {/* Simple slider implementation */}
                      <div
                        className="w-full h-1 bg-gray-200 rounded-full relative cursor-pointer"
                        onClick={handleSliderTrackClick}
                      >
                        {/* Colored track */}
                        <div
                          className="absolute h-1 bg-emerald-500 rounded-full"
                          style={{
                            right: "0",
                            width: `${(sliderValue / 20) * 100}%`,
                          }}
                        ></div>

                        {/* Slider buttons for each value */}
                        {[5, 10, 15, 20].map((value) => (
                          <button
                            key={value}
                            className={`absolute w-4 h-4 rounded-full -mt-1.5 focus:outline-none ${
                              sliderValue >= value
                                ? "bg-emerald-500"
                                : "bg-gray-300"
                            }`}
                            style={{
                              right: `${(value / 20) * 100}%`,
                              transform: "translateX(50%)",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSliderValue(value);
                            }}
                          ></button>
                        ))}
                      </div>

                      {/* Labels */}
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>۵</span>
                        <span>۱۰</span>
                        <span>۱۵</span>
                        <span>۲۰</span>
                      </div>
                      <div className="absolute top-0 right-0 text-xs text-gray-500">
                        تعیین
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md px-6 py-2">
                    ذخیره
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
