import React, { useRef, useState } from "react";

export default function Chat() {
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
    <div className="w-full h-full  p-5 border-2 border-indigo-[#D4D3CF] rounded-xl">
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خود را وارد نمایید
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-full h-full flex flex-col justify-center mt-16 border-2 border-indigo-[#D4D3CF] rounded-xl p-5 ">
        <div className="w-[92%] mx-auto h-full flex justify-between gap-5 items-end flex-col lg:flex-row py-5 px-2 mt-16 border-2 border-indigo-[#D4D3CF] rounded-[30px] relative">
          <span className="w-[77px] h-[23px] flex justify-center items-center absolute left-[13px] bottom-[33px] text-[11px] bg-[#FFAC03] rounded-[11px] ">
            همه تیکت ها
          </span>
        </div>
        <div className="w-[90%] h-full border-2 border-indigo-[#D4D3CF] mx-auto rounded-b-[30px] flex justify-center items-center p-5 bg-[#FBFAF6] text-[#708188] text-[20px]">
          حتما پیش از ارسال تیکت، سوالات رایج را مطالعه کرده و برای ثبت تیکت نیز
          با دقت کافی موضوع تیکت را انتخاب کنید تا تیکت شما به واحد مربوطه ارسال
          شود . از ثبت تیکت های متعدد خودداری کرده و برای دریافت پاسخ در
          سریعترین زمان، کلیه مشکلات و سوالات خود را صرفا در یک تیکت ارسال
          نمایید.پیشنهاد میگردد با عضویت در سایت و ورود به سایت اقدام به ثبت
          تیکت نمایید ، بدین شکل همیشه در پنل کاربری خود به تمام تیکتهای ارسالی
          تان دسترسی خواهید داشت .
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-auto p-3 rounded-[72px] mt-3 bg-[#F0EEEF] border border-[#e9e8e4] relative">
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
            <span className="text-[#708188] text-sm">
              چگونه می توان با شما همکاری نمود
            </span>
          </p>
          <div
            className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
              isVisible ? "" : "hidden"
            }`}>
            {/* باکس سمت راست */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="مریم"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="شاهی"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره موبایل جدید
                </button>
                <button
                  onClick={phoneHandleClick2}
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره ثابت جدید
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                {isPhone && (
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900">
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
                      className="block text-sm font-medium leading-6 text-gray-900">
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
            </div>
            {/* باکس سمت چپ */}
            <div className="w-full lg:w-2/3">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto p-3 rounded-[72px] mt-3 bg-[#F0EEEF] border border-[#e9e8e4] relative">
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
            <span className="text-[#708188] text-sm">
              چگونه می توان با شما همکاری نمود
            </span>
          </p>
          <div
            className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
              isVisible ? "" : "hidden"
            }`}>
            {/* باکس سمت راست */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="مریم"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="شاهی"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره موبایل جدید
                </button>
                <button
                  onClick={phoneHandleClick2}
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره ثابت جدید
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                {isPhone && (
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900">
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
                      className="block text-sm font-medium leading-6 text-gray-900">
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
            </div>
            {/* باکس سمت چپ */}
            <div className="w-full lg:w-2/3">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto p-3 rounded-[72px] mt-3 bg-[#F0EEEF] border border-[#e9e8e4] relative">
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
            <span className="text-[#708188] text-sm">
              چگونه می توان با شما همکاری نمود
            </span>
          </p>
          <div
            className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
              isVisible ? "" : "hidden"
            }`}>
            {/* باکس سمت راست */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="مریم"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="شاهی"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره موبایل جدید
                </button>
                <button
                  onClick={phoneHandleClick2}
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره ثابت جدید
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                {isPhone && (
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900">
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
                      className="block text-sm font-medium leading-6 text-gray-900">
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
            </div>
            {/* باکس سمت چپ */}
            <div className="w-full lg:w-2/3">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto p-3 rounded-[72px] mt-3 bg-[#F0EEEF] border border-[#e9e8e4] relative">
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
            <span className="text-[#708188] text-sm">
              چگونه می توان با شما همکاری نمود
            </span>
          </p>
          <div
            className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
              isVisible ? "" : "hidden"
            }`}>
            {/* باکس سمت راست */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="مریم"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="شاهی"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                    className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره موبایل جدید
                </button>
                <button
                  onClick={phoneHandleClick2}
                  className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white">
                  افزودن شماره ثابت جدید
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                {isPhone && (
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900">
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
                      className="block text-sm font-medium leading-6 text-gray-900">
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
            </div>
            {/* باکس سمت چپ */}
            <div className="w-full lg:w-2/3">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block text-sm font-medium leading-6 text-gray-900">
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
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-8">
        <div className="flex w-full justify-center flex-col lg:flex-row items-center gap-3">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-gray-900">
              دپارتمان را انتخاب کنید :{" "}
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com">
                <option value="" selected disabled>
                  لطفا یک مورد را انتخاب کنید
                  <br />
                </option>
                <option value="1">تیکت 1</option>
                <option value="2">تیکت 2</option>
                <option value="3">تیکت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
              نوع تیکت را انتخاب کنید :{" "}
            </label>
            <div className="w-full mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com">
                <option value="" selected disabled>
                  ابتدا دپارتمان را انتخاب نمایید <br />
                </option>
                <option value="1">تیکت 1</option>
                <option value="2">تیکت 2</option>
                <option value="3">تیکت 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 mt-2">
            <select
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com">
              <option value="" selected disabled></option>
              <option value="1">تیکت 1</option>
              <option value="2">تیکت 2</option>
              <option value="3">تیکت 3</option>
            </select>
          </div>
          <div className="w-full lg:w-1/2 mt-2">
            <select
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com">
              <option value="" selected disabled>
                متوسط
              </option>
              <option value="1">تیکت 1</option>
              <option value="2">تیکت 2</option>
              <option value="3">تیکت 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-between gap-5 py-5 px-2 mt-16 border-2 border-indigo-[#D4D3CF] bg-[#FBFAF6] rounded-[30px] relative">
        <div className="text-[#354D5A] px-1 flex absolute top-[-14px] bg-color4  right-8 items-center justify-center text-sm">
          محتوای تیکت را وارد نمایید{" "}
        </div>
        <textarea className="w-full h-[229px] border border-[#DBDBDB] "></textarea>
      </div>

      <div className="w-full h-full flex justify-center flex-col lg:flex-row mt-16 gap-5">
        <div className="w-full lg:w-[803px] h-[265px] flex flex-col justify-between gap-5 py-5 px-2  border-2 border-indigo-[#D4D3CF] rounded-[30px] relative">
          <div>حداکثر اندازه : ۳ مگابایت</div>
          <hr />
          <div>فرمت های مجاز : png، jpeg،jpg</div>
          <div className="w-full lg:w-[779px] h-[183px] flex items-center justify-center border border-[#DBDBDB] bg-[#FBFAF6] text-[#708188] text-[15px]">
            فایل هارا اینجا رها کنید ،‌بچسبانید یا انتخاب کنید
          </div>
        </div>
        <div className="w-[293px] h-[265px] border border-[#DBDBDB] bg-[#FBFAF6]">
          <div className=" flex justify-center items-center gap-7 mt-8">
            <img src="./img/speaker.svg" alt="speaker" />
            <img src="./img/record.svg" alt="record" />
          </div>
          <div className="flex justify-center items-center mt-16">
            00 : 00 : 00
          </div>
          <hr />
        </div>
      </div>
      <div className=" relative  w-full py-1.5 px-2 flex items-center  text-sm py-10 cursor-pointer">
        <span className="w-[125px] h-8 block flex justify-center items-canter absolute bottom-0 bg-[#F9E6BE] rounded-xl left-8">
          {" "}
          ارسال تیکت
        </span>
      </div>
    </div>
  );
}
