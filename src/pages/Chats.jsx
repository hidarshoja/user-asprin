import React from "react";

export default function Send() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خود را وارد نمایید
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-3 mt-16 border-2 border-indigo-[#D4D3CF] rounded-xl p-5 ">
        <div className="flex  justify-start items-center gap-3">
          <div className="w-[43px] h-[43px] rounded-full flex justify-center items-center border bg-[#F0EEEF]">
            <img src="./img/Arrow 37.svg" alt="Arrow" />
          </div>

          <div>
            <p className="text-[#828282] text-[15px] lg:text-[22px]">
              موضوع : مشکل در نمایش گالری تصاویر مطب
            </p>
            <p className="text-[#828282] text-[13px]">شناسه تیکت : ۹</p>
          </div>
        </div>
        <div className="flex justify-start items-center mt-11 gap-11">
          <div>
            <img src="./img/mdi.svg" alt="Arrow" />
          </div>
          <div>
            <img src="./img/Vector.svg" alt="Arrow" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div>
            <div className="w-[270px] lg:w-[891px] h-[1px] bg-[#C5CBCC] rounded-2xl relative mt-12">
              <div className="rounded-xl w-[127px] py-1.5 px-2 bg-[#F9E6BE] flex items-center justify-center text-sm absolute left-1/2 bottom-[-14px] cursor-pointer">
                <span> +ارسال پاسخ</span>
              </div>
            </div>
            <div className="w-[252px] lg:w-[621px] h-[194px] flex flex-col justify-between items-center p-5 mt-9	 bg-[#F5F5F5] rounded-t-[15px] rounded-bl-[38px] text-[#828282] text-[13px] ">
              سلام صفحه پروفایل من عکساش باز نمیشه
            </div>
            <div className="flex justify-start items-center mt-5 gap-3">
              <div>
                <img
                  src="./img/dr-mohamadi.svg"
                  className="w-[30px] h-[30px]"
                  alt="Arrow"
                />
              </div>
              <div>
                <p className="text-[#828282] text-[13px]">
                  دامپزشکی پارسه شهریار 15:59 02-14-1399{" "}
                </p>
              </div>
            </div>
            <div className="w-[252px] lg:w-[891px] h-[1px] bg-[#DDE2E5] rounded-[39px] relative mt-12">
              <div className="rounded-xl w-[127px] py-1.5 px-2 bg-[#F7F7F7] flex items-center justify-center border border-dashed border-[#C1C7C9] text-[16px] absolute left-1/2 bottom-[-14px] text-[#DBDDDF] cursor-pointer">
                <span>پاسخ ها</span>
              </div>
            </div>
            <div className="w-[252px] lg:w-[621px] h-[157px] flex flex-col p-5 mt-9 lg:mr-auto bg-[#F5F5F5] rounded-t-[15px] rounded-bl-[38px] text-[#828282] text-[13px] ">
              در اسرع وقت به مشکلتون رسیدگی میشه
            </div>
            <div className="flex lg:justify-end items-center mt-5 gap-3">
              <div>
                <img
                  src="./img/dr-mohamadi.svg"
                  className="w-[30px] h-[30px]"
                  alt="Arrow"
                />
              </div>
              <div>
                <p className="text-[#828282] text-[13px]">
                  15:59 02-14-1399سید رضا صالحی
                </p>
              </div>
            </div>
            <div className="w-[252px] lg:w-[621px] h-[190px] flex flex-col justify-between items-center gap-5 p-5 mt-9 bg-[#F5F5F5] rounded-t-[15px] rounded-bl-[38px] ">
              <div className=" text-[#828282] text-[13px] ml-auto">
                {" "}
                سلام <br />
                این مشکله منه میشه زودتر حلش کنید
              </div>
              <div className="w-full ">
                <div className="mt-2">
                  <select
                    className="block w-full rounded-t-[6px] rounded-bl-[21px] rounded-br-[6px] border border-dashed border-[#C1C7C9] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com">
                    <option value="" selected disabled>
                      <img
                        src="./img/sending-chat.svg"
                        className=""
                        alt="chat"
                      />
                      <div className="text-[#AAA]">image-251242</div>{" "}
                    </option>
                    <option value="1">خدمت 1</option>
                    <option value="2">خدمت 2</option>
                    <option value="3">خدمت 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-[#828282] text-[13px] flex justify-start items-center mt-5">
              مهرشاد شمس 15:59 02-14-1399
            </div>
            <div className="w-[252px] lg:w-[621px] h-[190px] flex flex-col justify-between items-center gap-5 p-5 mt-9 bg-[#F5F5F5] rounded-t-[15px] rounded-bl-[38px]  ">
              <div className="text-[#828282] text-[13px] ml-auto">
                ممنون حل شد
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[285px] h-[246px] flex flex-col items-center p-5 bg-[#F5F5F5] rounded-2xl">
              <div className="w-full bg-[#F9F9F9] border border-[#DDE2E5] flex justify-start items-center p-3 gap-3 rounded-b-[11px] rounded-tl-[11px] ">
                <span className="w-[13px] h-[13px] bg-[#FFD37A] rounded-full"></span>
                <span>باز</span>
              </div>
              <div className="w-[259px] h-[1px] bg-[#C5CBCC] mt-5"></div>

              <div className="flex justify-start items-center mt-5 gap-3 ml-auto">
                <div className="w-[43px] h-[43px] rounded-full flex justify-center items-center">
                  <img src="./img/clock.svg" alt="Arrow" />
                </div>

                <div>
                  <p className="text-[#465A65] text-[14px]">12-25-1392 15:59</p>
                  <p className="text-[#465A65] text-[14px]">
                    {" "}
                    به روز رسانی 5 ساعت پیش
                  </p>
                </div>
              </div>
              <div className="w-[259px] h-[1px] bg-[#C5CBCC] mt-5"></div>
              <div className="flex justify-start items-center mt-5 ml-auto text-[#465A65] text-xl">
                الویت : متوسط
              </div>
            </div>
            <div className="w-[285px] h-[76px] flex flex-col items-center p-5 bg-[#F5F5F5] rounded-2xl">
              <div className="flex justify-start items-center ml-auto gap-3">
                <div>
                  <img src="./img/dr-mohamadi.svg" alt="Arrow" />
                </div>
                <div>
                  <p className="text-[#828282] text-[22px]">دکتر محمدی </p>
                </div>
              </div>
            </div>
            <div className="w-[285px] h-[311px] flex flex-col justify-between items-center p-5 bg-[#F5F5F5] rounded-2xl">
              <div className="w-full flex flex-col justify-between items-center gap-5">
                <div className="text-[15px] text-[#465A65] ml-auto">
                  خدمات :
                </div>
                <div className="text-[15px] text-[#465A65] ">
                  کلینیک دامپزشکی پارسه شهریار دکتر
                  <br /> محمدی متخصص قلب عروق در آبادان.
                </div>
              </div>
              <div className="w-full flex flex-col justify-between items-center gap-5">
                <div className="flex justify-between items-center text-[#465A65] text-[15px] gap-7">
                  <span>تاریخ خرید</span>
                  <span>12-25-1392 15:59</span>
                </div>
                <div className="w-full flex justify-between items-center text-[#465A65] text-[15px] gap-7">
                  <span> تاریخ انقضا</span>
                  <span>نامحدود </span>
                </div>
                <div className="w-full flex justify-between items-center text-[#465A65] text-[15px] gap-7">
                  <span> تعدادباقی مانده</span>
                  <span>نامحدود</span>
                </div>
              </div>
            </div>
            <div className="w-[285px] h-[76px] flex justify-between items-center p-5 bg-[#F5F5F5] rounded-b-[15px] rounded-tl-[15px]">
              <div className="w-[25px] h-[25px] bg-[#FFD37A] rounded-full"></div>
              <div className="text-[#465A65] text-[13px]">
                ارتباط با پشتیبانی فنی / اطلاعات کاربری
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
