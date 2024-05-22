import React from "react";
import ChartComponent2 from "../components/ChartComponent";
import Footer from "../components/Footer";
export default function ChartPage() {
  return (
    <>
      <h3 className="text-[#000] text-xl  mt-8">میزان بازدید خدمات شما</h3>
      <div className="border-2 rounded-lg border-dashed border-[#BEBEBC] relative mt-64">
        <ChartComponent2 />
        <div className="w-[80%] lg:w-[493px] absolute border-2 rounded-lg border-dashed border-[#BEBEBC] top-[-215px] bg-white left-1/2 translate-x-[-50%] px-4 py-6">
          <div className="text-[10px] text-color2 absolute top-[-8px] bg-white px-1">
            گزارش آمار پروفایل
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="w-11/12 py-2 px-3 flex items-center justify-between text-sm text-[#000] bg-[#EBF5FF] rounded-lg">
              <span>آبدیت بازدید</span>
              <span>251374</span>
            </div>
            <div className="w-1/12 p-0.5 rounded-full border border-borderC flex items-center justify-center">
              <img src="/img/ref.svg" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span>تعداد بازدید کننده آنلاین</span>
            <span>25</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span> تعداد بازدید کل</span>
            <span>2111115</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span>پر بازدید ترین روز</span>
            <span>1402/10/25</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
