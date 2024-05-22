import React from "react";
import Table from "../components/Table";

export default function Financial() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          مشاهده وضعیت تراکنش کاربران
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-full min-h-[500px] rounded-lg  py-3 px-2 border border-borderC mt-12 bg-white relative">
        <div className="text-[#000] text-sm px-1 bg-white absolute top-[-10px] right-6">
          تراکنش ها
        </div>
        <div className="flex  flex-col flex-wrap lg:flex-row w-full py-2 gap-6">
          <div className=" flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-3 justify-between">
              <input
                type="text"
                placeholder="تاریخ ثبت از"
                className=" border border-borderC rounded-lg py-1 outline-none px-2 text-sm"
              />
              <input
                type="text"
                placeholder="تاریخ ثبت تا"
                className=" border border-borderC rounded-lg py-1 outline-none px-2 text-sm"
              />
            </div>

            <div className="flex items-center lg:flex-row flex-wrap gap-3 ">
              <div className="flex justify-center items-center w-[130px] h-[35px] bg-[#F9E5C0] text-lg rounded-[40px]">
                جستجو
              </div>
              <div className="flex justify-center items-center w-[130px] h-[35px] bg-[#F9E5C0] text-lg rounded-[40px]">
                پرینت
              </div>
              <div className="flex justify-center items-center w-[159px] h-[35px] bg-[#F9E5C0] text-lg rounded-[40px]">
                خروجی PDF
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-between gap-3">
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              جستجو
            </button>
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              پرینت
            </button>
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              خروجی pdf
            </button>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-color2 text-sm">
            {" "}
            نمایش ۱ تا ۲۰ مورد از ۱۵۰ مورد{" "}
          </p>
          <Table />
        </div>
      </div>
    </>
  );
}
