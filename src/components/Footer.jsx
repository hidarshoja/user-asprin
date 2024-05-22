import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="w-[92%] h-full lg:min-h-[348px] lg:mr-12 mt-16 border-dashed border-2 border-indigo-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6">
        <div className="absolute top-[-10px] bg-[#fbfaf6] px-2 lg:right-32 text-[#000] text-sm">
          راهکارهای افزایش بازدید و تعداد بیمار
        </div>

        <div className="rounded-xl p-1 flex flex-col xl:flex-row items-center justify-between text-sm bottom-[-16px]  cursor-pointer">
          <div className="flex flex-col lg:flex-row relative lg:left-[60px]  items-center justify-between">
            <img src="./img/footer1.png"  alt="footer" />
            <img src="./img/footer2.png"  alt="footer" />
          </div>
          <div className="flex flex-col lg:flex-row relative right:1/2 xl:right-[50px]  items-center justify-between">
            <div className="flex flex-row">
              <img
                src="./img/footer3.png"
                className="w-[41px] xl:w-[20px] 2xl:w-[40px] h-[183px]"
                alt="footer"
              />
              <img src="./img/footer4.png" className="xl:w-[250px] 2xl:w-auto"  alt="footer" />
            </div>
            <img src="./img/footer5.png"  alt="footer" />
          </div>
        </div>
        <span className="absolute  bg-[#fbfaf6] px-2 left-1/2 bottom-[-6px] lg:bottom-[-9px] text-[#000] text-sm">
          تبلیغات
        </span>
      </div>
      <div className="flex gap-6 mt-6 flex-col lg:flex-row p-2 items-center w-[92%] mx-auto">
        <div className="w-full lg:w-1/2">
        <img
          src="./img/aspirin-footer1.png"
          className="rounded-xl w-full h-[198px]  lg:h-[303px] "
          alt="footer"
        />
        </div>
       <div className="w-full lg:w-1/2">
       <img
          src="./img/aspirin-footer2.png"
          className="rounded-xl w-full h-[198px]  lg:h-[303px]"
          alt="footer"
        />
       </div>
      </div>
    </div>
  );
}
