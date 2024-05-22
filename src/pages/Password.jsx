import React from "react";

export default function Password() {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          ویرایش رمز عبور{" "}
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[70%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-full flex items-center mt-[100px] justify-center">
        <div className="w-full lg:w-1/4">
          <p className="text-[#000] text-base">ویرایش رمز عبور</p>
          <div className="w-full h-auto py-6 px-3 border border-borderC bg-white rounded-lg mt-7 relative">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                رمز عبور جدید
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="******"
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                تکرار رمز عبور جدید
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end">
              <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
                تغییر رمز
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
