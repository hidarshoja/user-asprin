import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خود را وارد نمایید
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-[92%] mr-auto mt-16 border border-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6">
        <div className="absolute top-[-10px] bg-[#fbfaf6] px-2 right-32 text-[#000] text-sm">
          اطلاعات فردی
        </div>
        <div className="absolute right-0 top-[-40px] lg:right-[-50px] lg:top-[-15px]">
          <img
            src="/img/users.svg"
            className="w-[120x] h-[120px] border-none lg:w-[183px] lg:h-[183px]"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-around gap-3 px-2">
          <div className="w-1/4 "></div>
          <div className="w-[60%] mr-auto lg:w-2/6 flex flex-col">
            <p className="text-[#000] text-sm">تصویر پروفایل</p>
            <p className="text-[#000] text-[9px]">
              – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
              - سایز عکس 400 در 400 پیکسل باشد. <br />
              – فرمت عکس jpg باشد. <br />
              – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
            </p>
            <span className="bg-[#29709F] text-white rounded-xl px-6 py-0.5 cursor-pointer lg:w-[40%] text-sm mt-5  flex items-center justify-center">
              ارسال عکس
            </span>
          </div>
          <div className="w-full lg:w-2/6">
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                نام و نام خانوادگی مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                شماره مجوز یا نظام پزشکی :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                شماره تماس مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                ایمیل مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
          </div>
          <div className="w-1/6"></div>
        </div>
        <div className="rounded-xl py-1.5 px-2 bg-[#29709F] flex items-center justify-center text-white text-sm absolute bottom-[-16px] left-7 cursor-pointer">
          <span>ذخیره</span>
        </div>
      </div>
    </div>
  );
}
