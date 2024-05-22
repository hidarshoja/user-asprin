import React, { useRef, useState } from "react";
import Tiptap2 from "../components/Tiptap2";

export default function Information() {
  const editorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isPhone2, setIsPhone2] = useState(false);
  const [isPhoneBox, setIsPhoneBox] = useState(false);
  const [isPhoneBox2, setIsPhoneBox2] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const phoneHandleClick = () => {
    setIsPhone(!isPhone);
  };

  const phoneHandleClick2 = () => {
    setIsPhone2(!isPhone2);
  };

  const phoneHandleClickBox = () => {
    setIsPhoneBox(!isPhoneBox);
  };

  const phoneHandleClickBox2 = () => {
    setIsPhone2(!isPhoneBox2);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خدمات درمانی
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>

      <div className="w-full px-1 md:px-8">
        <h3 className="text-[#000] text-xl  mt-8">
        اطلاعات نوع خدمات و توضیحات تکمیلی
        </h3>
        {/* باکس اینپوت ها */}
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              خدمات
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام مرکز درمانی *
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="کوثر"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام نمایش صفحه
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="
                "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              تخصص *
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              زیر تخصص *
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              خدمات ویژه
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="
                "
              />
            </div>
          </div>
        </div>
        {/*  اتمام باکس اینپوت ها */}
        {/* شروع باکس ریزدرمان و ... */}
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-16">
          <div className="w-full lg:w-5/12">
            <p className="text-[#000] text-[10px] py-2">ریز درمان ها : *</p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] p-2">
              <p className="text-[#d2a09f] text-[9px]">
                - انتخاب ریز درمان های تخصصی که توسط شما انجام میشود به (ترتیب
                الویت) حداکثر ۵ مورد
              </p>
              <p className="text-[11px] text-[#000]">موارد : </p>
              <ul className="list-decimal flex flex-col gap-12 w-[96%] mt-8 mr-auto">
                <li className="relative">
                  <div className="w-full">
                    <div>
                      <select
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      >
                        <option value="" selected disabled>
                          خدمات خود را انتخاب کنید
                        </option>
                        <option value="1">خدمت 1</option>
                        <option value="2">خدمت 2</option>
                        <option value="3">خدمت 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="absolute flex gap-3 mt-1">
                    <span className="w-4 font-bold h-4 rounded-full text-[#4a6dcb] text-[10px] bg-[#dce7eb] flex items-center justify-center cursor-pointer">
                      +
                    </span>
                    <span className="w-4 font-bold h-4 rounded-full text-[#4a6dcb] text-[12px] bg-[#dce7eb] flex items-center justify-center cursor-pointer">
                      -
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <p className="text-[#000] text-[10px] py-2">
              توضیحات درباره ما : *
            </p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] ">
              <p className="text-[#d2a09f] text-[9px] p-2">
                – لطفا در کادر زیر اطلاعاتی از قبیل خدماتی که ارائه میدهید،
                سابقه کاری، جوایز و افتخارات، مزیت های شما نسبت به رقبا و سال
                تاسیس را واردنمایید. – توضیحات حداکثر ۱۵۰ کلمه باشد .
              </p>
              <div className="w-full">
                <Tiptap2 editorRef={editorRef} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/12">
            <p className="text-[#000] text-[10px] py-2"> شبکه های اجتماعی </p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] p-2">
              <div className="w-full mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  وب سایت
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="وب سایت"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک اینستاگرام
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک اینستاگرام"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک تلگرام
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک تلگرام"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک واتس آپ
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک واتس آپ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* شروع باکس اطلاعات ادرس  */}
        <div className="mt-20 w-full">
          <p className="text-base lg:text-lg text-[#000]">
            اطلاعات آدرس و شماره تماس
          </p>
          <div className="w-full h-auto p-3 rounded-xl mt-3 bg-[#fbfaf6] border border-[#e9e8e4] relative">
            <div className="absolute right-[-18px] top-[-5px] cursor-pointer">
              {isVisible && (
                <img src="/img/minus.svg" onClick={toggleVisibility} alt="" />
              )}
              {!isVisible && (
                <img src="/img/pluss.svg" onClick={toggleVisibility} alt="" />
              )}
            </div>
            <p className="flex gap-3 items-center">
              <span className="block w-1 h-1 bg-[#304a59] rounded-full"></span>
              <span className="text-[#000] text-sm">
                دسترسی و راه های ارتباطی اول
              </span>
            </p>
            <div
              className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
                isVisible ? "" : "hidden"
              }`}
            >
              {/* باکس سمت راست */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      استان
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شهر
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره موبایل
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره موبایل"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره ثابت
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره ثابت"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between flex-col lg:flex-row gap-3 mt-3">
                  <button
                    onClick={phoneHandleClick}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره موبایل جدید
                  </button>
                  <button
                    onClick={phoneHandleClick2}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره ثابت جدید
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  {isPhone && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره موبایل
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره موبایل"
                        />
                      </div>
                    </div>
                  )}
                  {isPhone2 && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره ثابت
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره ثابت"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-3">
                    <p className="text-center border border-[#81817f] rounded-3xl bg-[#f9f9f9] py-0.5 px-4 flex items-center justify-center w-[120px] text-sm">
                      ساعت کاری
                    </p>
                  </div>
                  <div className="w-full min-h-[300px] rounded-lg border border-[#e9e8e4] bg-[#fbfaf6] mt-3 p-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری1شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری2شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری3شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری4شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری5شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری جمعه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className=" py-1  text-base text-[#000]">امکانات</p>
                  <div className="flex items-center mt-5">
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        آسانسور
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        پارکینگ
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        شبانه روزی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* باکس سمت چپ */}
              <div className="w-full lg:w-2/3">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    آدرس کامل
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نشانه گذاری دقیق تر روی نقشه
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <p className="text-[#d14045] text-[10px]">
                    برای ثبت موقعیت مکانی خود روی صفحه کلیک کنید *
                  </p>
                  <div className="w-full h-[380px] rounded-lg mt-5">
                    <iframe
                      title="Mashhad Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: "10px" }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Bojnord+Iran`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-8 bottom-[-15px] bg-[#29709F] text-white py-1 px-6 rounded-lg text-[11px] flex items-center justify-center">
              ذخیره
            </button>
          </div>
        </div>
        {/* راه ارتباطی دوم */}
        <div className="mt-20 w-full">
          <p className="text-base lg:text-lg text-[#000]">
            اطلاعات آدرس و شماره تماس
          </p>
          <div className="w-full h-auto p-3 rounded-xl mt-3 bg-[#fbfaf6] border border-[#e9e8e4] relative">
            <div className="absolute right-[-18px] top-[-5px] cursor-pointer">
              {isVisible2 && (
                <img src="/img/minus.svg" onClick={toggleVisibility2} alt="" />
              )}
              {!isVisible2 && (
                <img src="/img/pluss.svg" onClick={toggleVisibility2} alt="" />
              )}
            </div>
            <p className="flex gap-3 items-center">
              <span className="block w-1 h-1 bg-[#304a59] rounded-full"></span>
              <span className="text-[#000] text-sm">
                دسترسی و راه های ارتباطی دوم
              </span>
            </p>
            <div
              className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
                isVisible2 ? "" : "hidden"
              }`}
            >
              {/* باکس سمت راست */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      استان
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شهر
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره موبایل
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره موبایل"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره ثابت
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره ثابت"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between flex-col lg:flex-row gap-3 mt-3">
                  <button
                    onClick={phoneHandleClickBox}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره موبایل جدید
                  </button>
                  <button
                    onClick={phoneHandleClickBox2}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره ثابت جدید
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  {isPhoneBox && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره موبایل
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره موبایل"
                        />
                      </div>
                    </div>
                  )}
                  {isPhoneBox2 && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره ثابت
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره ثابت"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-3">
                    <p className="text-center border border-[#81817f] rounded-3xl bg-[#f9f9f9] py-0.5 px-4 flex items-center justify-center w-[120px] text-sm">
                      ساعت کاری
                    </p>
                  </div>
                  <div className="w-full min-h-[300px] rounded-lg border border-[#e9e8e4] bg-[#fbfaf6] mt-3 p-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری1شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری2شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری3شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری4شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری5شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری جمعه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className=" py-1  text-base text-[#000]">امکانات</p>
                  <div className="flex items-center mt-5">
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        آسانسور
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        پارکینگ
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        شبانه روزی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* باکس سمت چپ */}
              <div className="w-full lg:w-2/3">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    آدرس کامل
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نشانه گذاری دقیق تر روی نقشه
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <p className="text-[#d14045] text-[10px]">
                    برای ثبت موقعیت مکانی خود روی صفحه کلیک کنید *
                  </p>
                  <div className="w-full h-[380px] rounded-lg mt-5">
                    <iframe
                      title="Mashhad Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: "10px" }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Bojnord+Iran`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-8 bottom-[-15px] bg-[#29709F] text-white py-1 px-6 rounded-lg text-[11px] flex items-center justify-center">
              ذخیره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
