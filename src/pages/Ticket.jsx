import React from "react";
import Chats from "./Chats";
export default function Ticket() {
  return (
    <div>
      {/* <div className="flex items-center justify-between p-5">
        <p className="text-[#000] text-[18px] lg:text-[21px]">همه تیکت ها</p>
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-3 mt-16 border-2 border-indigo-[#D4D3CF] rounded-xl  relative p-5 ">
        <div className="w-full h-full flex justify-center gap-3 mt-16 flex-wrap min-h-[160px]">
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <div className="w-[10px] h-[10px] rounded-full  absolute right-[57px] bg-[#F81B1A]"></div>
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              باز
            </p>
            <span className="w-full flex justify-center items-center mt-4 text-[#F81B1A]">
              ۳
            </span>
          </div>
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <div className="w-[10px] h-[10px] rounded-full absolute right-[57px] bg-[#F0932C]"></div>
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              بسته
            </p>
            <span className="w-full flex justify-center items-center mt-4 text-[#F0932C]">
              2
            </span>
          </div>
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <div className="w-[10px] h-[10px] rounded-full absolute right-[57px] bg-[#2DCC6F]"></div>
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              پاسخ داده شده
            </p>
            <span className="w-full flex justify-center items-center mt-4 text-[#2DCC6F]">
              1
            </span>
          </div>
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <div className="w-[10px] h-[10px] rounded-full absolute right-[57px] bg-[#3A3B97]"></div>
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              پایان یافته
            </p>
            <span className="w-full flex justify-center items-center mt-4 text-[#3A3B97]">
              1
            </span>
          </div>
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <div className="w-[10px] h-[10px] rounded-full absolute right-[57px] bg-[#0095E6]"></div>
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              در حال انجام
            </p>
            <span className="w-full flex justify-center items-center mt-4 text-[#0095E6]">
              ۳
            </span>
          </div>
          <div className="w-[162px] h-[160px] flex-col justify-between items-center border-2 border-indigo-[#D4D3CF] rounded-xl">
            <div className="w-full flex justify-center items-center mt-4 relative">
              <img
                src="./img/ticket.svg"
                className="w-[35px] h-[31px]"
                alt="ticket"
              />
            </div>
            <p className="w-full flex justify-center items-center mt-4 text-[#708188]">
              همه
            </p>
            <span className="w-full flex justify-center items-center mt-4 ">
              ۳
            </span>
          </div>
        </div>

        <div className="w-[92%] h-full flex justify-between gap-5 items-end flex-col lg:flex-row py-5 px-2 mt-16 border-2 border-indigo-[#D4D3CF] rounded-[30px] relative">
          <div className="text-[#C4C4C4] px-1 flex absolute top-[-14px] bg-color4  right-8 items-center justify-center text-sm">
            جستجو
          </div>
          <div className="w-full lg:w-[20%] flex justify-center flex-col items-start">
            <div className="text-[#828282] text-sm">عنوان :</div>
            <div className="w-full">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[10px] sm:leading-6"
                placeholder="مشکل باز نشدن صفحه ام و ..."
              />
            </div>
          </div>
          <div className="w-full lg:w-[20%] flex justify-center flex-col items-start">
            <div className="text-[#828282] text-sm">خدمات : </div>
            <div className="w-full">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[10px] sm:leading-6"
                placeholder="باز یا بسته است و ...‍"
              />
            </div>
          </div>
          <div className="w-full lg:w-[20%] flex justify-center flex-col items-start">
            <div className="text-[#828282] text-sm"> وضعیت :</div>
            <div className="w-full">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[10px] sm:leading-6"
                placeholder="داروخانه یا دامپزشکی و ...."
              />
            </div>
          </div>
          <div className="w-full lg:w-[20%] flex justify-center flex-col items-start">
            <div className="text-[#828282] text-sm"> شناسه تیکت :</div>
            <div className="w-full">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[10px] sm:leading-6"
                placeholder="۲۳۴۵۶۷۸۹"
              />
            </div>
          </div>
          <div className="w-full lg:w-[10%] h-[32px] rounded-2xl flex justify-center items-center bg-[#FFAC03] text-[#354D5A]">
            جستجو
          </div>
        </div>
        <div>
          <p className="text-[#C4C4C4] text-[11px]">نمایش ۸ تیکت</p>
        </div>
        <hr />
        <div className="w-full h-full hidden lg:block flex justify-between flex-wrap">
          <span className="text-[#828282] text-[12px]">شناسه</span>
          <span className="text-[#828282] text-[12px]">عنوان</span>
          <span className="text-[#828282] text-[12px]">خدمات</span>
          <span className="text-[#828282] text-[12px]">وضعیت</span>
          <span className="text-[#828282] text-[12px]">تاریخ بروزرسانی</span>
          <span className="text-[#828282] text-[12px]">نمایش</span>
        </div>
      </div>
      <div className="w-full h-[89px] flex flex-col hidden lg:block lg:flex-row justify-between items-center  p-5 mt-8 border border-[#D4D3CF] border-s-4  border-s-[#E76A68] rounded-lg ">
        <div className="w-full h-full flex justify-between items-center">
          <div className="text-[#C4C4C4] text-[11px]">۲۳۴۵۶۷۸۵</div>
          <div className=" text-[#334A5A]">
            مشکل در نمایش بخش دیدگاه محصولات
          </div>
          <div className="w-[62px] h-[24px] flex justify-center items-center border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
            داروخانه
          </div>
          <div className=" h-[24px] justify-center items-center p-2 border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
            پزشک عمومی
          </div>
          <div className="w-[62px] h-[24px] flex justify-center items-center gap-3 border border-[#F81B1A] rounded-lg text-sm text-[#708188]">
            <div className="w-[7px] h-[7px] bg-[#F81B1A] rounded-full"></div>
            <div>باز</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="text-[#828282] text-[13px]"> 1402-04-23 15:35</div>
            <div className="text-[#828282] text-[13px]"> 3 روز قبل</div>
          </div>
          <div>
            {" "}
            <img src="./img/tic-eye.svg" alt="tic" />
          </div>
        </div>
      </div>
      <div className="w-full h-[89px] flex flex-col hidden lg:block lg:flex-row justify-between items-center p-5 mt-8 border border-[#D4D3CF] border-t-4  border-s-[#FFAC03] rounded-lg ">
        <div className="text-[#C4C4C4] text-[11px]">۲۳۴۵۶۷۸۵</div>
        <div className=" text-[#334A5A]">مشکل در نمایش بخش دیدگاه محصولات</div>
        <div className="w-[62px] h-[24px] flex justify-center items-center border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
          داروخانه
        </div>
        <div className=" h-[24px] justify-center items-center p-2 border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
          پزشک عمومی
        </div>
        <div className="w-[62px] h-[24px] flex justify-center items-center gap-3 border border-[#F81B1A] rounded-lg text-sm text-[#708188]">
          <div className="w-[7px] h-[7px] bg-[#F0932C] rounded-full"></div>
          <div>باز</div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="text-[#828282] text-[13px]"> 1402-04-23 15:35</div>
          <div className="text-[#828282] text-[13px]"> 3 روز قبل</div>
        </div>
        <div>
          {" "}
          <img src="./img/tic-eye2.svg" alt="tic" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center md:block lg:hidden">
        <div className="w-full h-full flex justify-center items-center gap-3 mt-8">
          <div className="w-[72px] h-[478px] flex justify-between items-center flex-col gap-3 mt-8 border border-[#D4D3CF] rounded-t-3xl rounded-b-3xl">
            <span className="text-[#828282] text-[12px]">شناسه</span>
            <span className="text-[#828282] text-[12px]">عنوان</span>
            <span className="text-[#828282] text-[12px]">خدمات</span>
            <span className="text-[#828282] text-[12px]">وضعیت</span>
            <span className="text-[#828282] text-[12px]">تاریخ بروزرسانی</span>
            <span className="text-[#828282] text-[12px]">نمایش</span>
          </div>
          <div className="w-[195px] h-[472px] flex flex-col justify-between items-center  p-5 mt-8 gap-3 border border-[#D4D3CF] border-t-4  border-t-[#E76A68] rounded-lg ">
            <div className="w-full h-full flex flex-col justify-between items-center">
              <div className="text-[#C4C4C4] text-[11px]">۲۳۴۵۶۷۸۵</div>
              <div className=" text-[#334A5A]">
                مشکل در نمایش بخش دیدگاه محصولات
              </div>
              <div className="w-[62px] h-[24px] flex justify-center items-center border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
                داروخانه
              </div>
              <div className=" h-[24px] justify-center items-center p-2 border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
                پزشک عمومی
              </div>
              <div className="w-[62px] h-[24px] flex justify-center items-center gap-3 border border-[#F81B1A] rounded-lg text-sm text-[#708188]">
                <div className="w-[7px] h-[7px] bg-[#F81B1A] rounded-full"></div>
                <div>باز</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="text-[#828282] text-[13px]">
                  {" "}
                  1402-04-23 15:35
                </div>
                <div className="text-[#828282] text-[13px]"> 3 روز قبل</div>
              </div>
              <div>
                {" "}
                <img src="./img/tic-eye.svg" alt="tic" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-3 mt-8">
          <div className="w-[72px] h-[478px] flex justify-between items-center flex-col gap-3 mt-8 border border-[#D4D3CF] rounded-t-3xl rounded-b-3xl">
            <span className="text-[#828282] text-[12px]">شناسه</span>
            <span className="text-[#828282] text-[12px]">عنوان</span>
            <span className="text-[#828282] text-[12px]">خدمات</span>
            <span className="text-[#828282] text-[12px]">وضعیت</span>
            <span className="text-[#828282] text-[12px]">تاریخ بروزرسانی</span>
            <span className="text-[#828282] text-[12px]">نمایش</span>
          </div>
          <div className="w-[195px] h-[472px] flex flex-col justify-between items-center p-5 mt-8 gap-3 border border-[#D4D3CF] border-t-4  border-t-[#FFAC03] rounded-lg ">
            <div className="text-[#C4C4C4] text-[11px]">۲۳۴۵۶۷۸۵</div>
            <div className=" text-[#334A5A]">
              مشکل در نمایش بخش دیدگاه محصولات
            </div>
            <div className="w-[62px] h-[24px] flex justify-center items-center border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
              داروخانه
            </div>
            <div className=" h-[24px] justify-center items-center p-2 border border-dashed border-[#E4E4E4] rounded-lg text-sm text-[#708188]">
              پزشک عمومی
            </div>
            <div className="w-[62px] h-[24px] flex justify-center items-center gap-3 border border-[#F81B1A] rounded-lg text-sm text-[#708188]">
              <div className="w-[7px] h-[7px] bg-[#F0932C] rounded-full"></div>
              <div>باز</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-[#828282] text-[13px]">
                {" "}
                1402-04-23 15:35
              </div>
              <div className="text-[#828282] text-[13px]"> 3 روز قبل</div>
            </div>
            <div>
              {" "}
              <img src="./img/tic-eye2.svg" alt="tic" />
            </div>
          </div>
        </div>
      </div> */}
      <Chats />
    </div>
  );
}
