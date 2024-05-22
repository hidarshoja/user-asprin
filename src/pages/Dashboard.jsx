import React from "react";
import Footer from "../components/Footer";
export default function Dashboard() {
  return (
    <div className="bg-[#FBFAF6]">
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خود را وارد نمایید
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>

      <div className="w-full h-full border border-gray-400 mt-5 rounded-2xl p-3">
        <div className="flex items-center mr-40 mb-[-52px] mt-12	 px-2 text-xs text-red-500 text-sm">
          <img src="./img/star.svg" alt="star" />
          برای تغییر اطلاعات زیر بر روی سکشن مورد نظر کلیک کرده و شروع به تایپ
          نمایید .
        </div>
        <div className="w-[92%] h-auto mr-auto mt-16 border-dashed border-2 border-indigo-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6">
          <div className="absolute right-0 top-[-40px] lg:right-[-50px] lg:top-[-15px]">
            <img
              src="/img/users.svg"
              className="w-[120x] h-[120px] border-none lg:w-[183px] lg:h-[183px]"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-around gap-3 px-2">
            <div className="w-[60%] mr-auto lg:w-2/6 flex flex-col">
              <div className="w-[85%] lg:w-[326px] h-[54px] bg-white rounded-lg mt-4 px-2 py-2 text-right text-xl lg:text-2xl text-[#E8E8E8]">
                دکتر مریم شاهی
              </div>
              <div className="w-[75%] lg:w-[210px] h-auto bg-white rounded-lg mt-4	px-2 py-2 text-right text-base	 text-[#E8E8E8]">
                متخصص زنان و زایمان
              </div>
              <div className="w-[75%] lg:w-[210px] h-auto bg-white rounded-lg mt-4	px-2 py-2 text-right text-base	 text-[#E8E8E8]">
                لاپاراسکوپی
                <br />
                جراحی زیبایی <br />
                زایمان طبیعی ...
              </div>
            </div>
            <div className="w-full lg:w-2/6">
              <div className="w-full mt-3">
                <div className="flex items-center text-[#000] text-sm py-0.5">
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
                <div className="flex items-center text-[#000] text-sm py-0.5">
                  <span>شبکه های اجتماعی و وبسایت :</span>
                  <img src="/img/media.svg" alt="media" />
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
                  <img src="/img/whatsapp.svg" alt="whatsapp" />
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
                  <img src="/img/instagram.svg" alt="instagram" />
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
          <div className="flex justify-between flex-col lg:flex-row h-[262px] lg:h-[51px] px-2 my-1 mt-5 rounded-xl relative items-center w-full border border-[#EEE1D1] bg-white">
            <img
              src="/img/minus.svg"
              className="absolute right-0 lg:right-[-11px]"
              alt="minus"
            />

            <div className="flex justify-around lg:flex-row px-2 mt-5 lg:mb-5 text-xs items-center gap-7">
              <span className="lg:hidden">مطب اول</span>
              <span className="hidden lg:block">راه های ارتباطی اول</span>

              <span className="flex items-center h-[84px] w-full lg:h-[32px] bg-[#FBFAF6] px-2 rounded-xl">
                {" "}
                شهریار | خیابان ولیعصر | کوچه آقا جانلو ...
              </span>
            </div>
            <div className="flex flex-col lg:flex-row px-2 mb-5 lg:mt-5 gap-7 items-center text-[#31546B]">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full flex justify-center items-center text-center align-center w-[197px] h-[32px] bg-[#FBFAF6] px-2 rounded-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="۰۲۱-۲۵۲۵۱۴
            "
              />{" "}
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full flex justify-center items-center text-center align-center w-[197px] h-[32px] bg-[#FBFAF6] px-2 rounded-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="۰۲۱-۲۵۲۵۱۴
            "
              />
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row h-[262px] lg:h-[51px] px-2 my-1 mt-5 rounded-xl relative items-center w-full border border-[#EEE1D1] bg-white ">
            <img
              src="/img/plus.svg"
              className="absolute right-0 lg:right-[-11px]"
              alt="plus"
            />

            <div className="flex justify-around sm:flex-col lg:flex-row px-2 mt-5 lg:mb-5 text-xs items-center gap-7">
              <span className="lg:hidden">مطب دوم</span>
              <span className="hidden lg:block">راه های ارتباطی دوم</span>
              <span className="flex items-center h-[84px] w-full lg:h-[32px] bg-[#FBFAF6] px-2 rounded-xl">
                {" "}
                شهریار | خیابان ولیعصر | کوچه آقا جانلو ...
              </span>
            </div>
            <div
              className="flex flex-col lg:flex-row px-2 mb-5 lg:mt-5 gap-7
            
            items-center text-[#31546B]">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full flex justify-center items-center text-center align-center w-[197px] h-[32px] bg-[#FBFAF6] px-2 rounded-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="۰۲۱-۲۵۲۵۱۴
            "
              />{" "}
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full flex justify-center items-center text-center align-center w-[197px] h-[32px] bg-[#FBFAF6] px-2 rounded-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="۰۲۱-۲۵۲۵۱۴
            "
              />
            </div>
          </div>
          <div className="rounded-xl py-1.5 px-2 bg-[#F9E5C0] flex items-center justify-center text-sm rounded-xl absolute bottom-[-16px] left-1/2 translate-x-[-50%] cursor-pointer">
            <span>ذخیره اطلاعات</span>
          </div>
        </div>
        <div className="w-full  flex flex-col mt-20 items-center justify-center flex-wrap gap-3">
          <div className="flex  flex-wrap justify-center w-full lg:flex-row items-center gap-10 lg:gap-20	">
            <div className=" border border-[#FFDDAD] w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full  bg-[#FFDDAD] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    بازدید پرفایل
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div className="flex  mt-2 items-center justify-between ">
                      <span className="ml-20">ماهانه</span>
                      <span>۵۰۰</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border border-[#FFDAC8] bg-[#FFF5E9] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کل بازدید ها</div>
                  <div>k12</div>
                </div>
              </div>
            </div>
            <div className=" border border-[#FFDAC8] w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#FFDAC8] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    اخبار و اطاعیه ها
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div className="flex  ml-10 mt-2 items-center justify-center ">
                      ۱۲۴ پیام
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#FFF5E9] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>خوانده شده</div>
                  <div>۸۵</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>خوانده نشده</div>
                  <div>۸۵</div>
                </div>
              </div>
            </div>
            <div className=" border border-[#C0F6D4] w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#C9FFDD] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    تیکت ها
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div className="flex  ml-10 mt-2 items-center justify-center ">
                      ۱۰۵
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#EDFFF3] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>باز</div>
                  <div>۵۰‍</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>بسته شده </div>
                  <div>۱۰</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>پاسخ داده شده </div>
                  <div>۵۰۰‍</div>
                </div>
              </div>
            </div>
            <div className="  border border-[#E5DCF7] w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#ECE3FE] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    دیدگاه ها
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div className="flex  ml-10 mt-2 items-center justify-center ">
                      ۲۵۱۳
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#F7F4FF] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>پاسخ داده شده</div>
                  <div>۸۶۵</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div> مانده </div>
                  <div>۸۶۵</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>بسته شده </div>
                  <div>۸۶۵</div>
                </div>
              </div>
            </div>
            <div className=" border border-[#C6EEFA]  w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#CBF3FF] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    عضویت
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div className="flex  ml-10 mt-2 items-center justify-center ">
                      روز ۳۸۲
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#EBFAFF] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>اشتراک ویژه </div>
                  <div>دارید</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>روزهای مانده </div>
                  <div>۲۸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
