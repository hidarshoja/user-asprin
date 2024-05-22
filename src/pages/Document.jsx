import React, { useRef, useState } from "react";

export default function Document() {
  const [imageFiles2, setImageFiles2] = useState(Array(5).fill(null));
  const [statusesImg2, setStatusesImg2] = useState(Array(5).fill("empty"));

  const handleRemoveImage2 = (index) => {
    const newImageFiles = [...imageFiles2];
    newImageFiles[index] = null;
    setImageFiles2(newImageFiles);
    const newStatuses = [...statusesImg2];
    newStatuses[index] = "empty";
    setStatusesImg2(newStatuses);
  };

  const handleImageInputChange2 = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageFiles = [...imageFiles2];
      newImageFiles[index] = file;
      setImageFiles2(newImageFiles);
      const newStatuses = [...statusesImg2];
      newStatuses[index] = "uploaded";
      setStatusesImg2(newStatuses);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-5">
          <p className="text-[#000] text-[18px] lg:text-[21px]">ارسال مدارک</p>
        </div>
        <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
          <img src="./img/Elli.svg" alt="1" />
          <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-24 min-h-[200px] rounded-lg border border-[#d4d3cf] relative py-2 px-4 gap-8">
          <div className="text-[#adacab] text-sm absolute right-6 top-[-10px] bg-[#fdfdfd] px-2">
            ارسال مدارک
          </div>
          <div className="w-full lg:w-1/6 h-[132px] ">
            <p className="text-[#000] text-sm"> تصویر پروفایل</p>
            <p className="text-[#000] text-[9px]">
              – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
              - سایز عکس 400 در 400 پیکسل باشد. <br />
              – فرمت عکس jpg باشد. <br />
              – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
            </p>
          </div>
          {imageFiles2.map((imageFile, index) => (
            <div
              className="w-full lg:w-1/6 h-[132px] border border-[##D4D3CF] rounded-lg relative p-1"
              key={index}>
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="w-full h-full rounded-lg"
                  style={{ objectFit: "cover" }}
                  alt={`Image ${index}`}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full rounded-lg bg-gray-200">
                  <span className="text-[12px] font-semibold">
                    تصویر{" "}
                    {statusesImg2[index] === "empty" ? "جدید" : "آپلود شده"}
                  </span>
                </div>
              )}
              {statusesImg2[index] === "empty" && (
                <label className="absolute left-[-12px] top-[45px] cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleImageInputChange2(index, e)}
                  />
                  <img src="/img/pluss2.svg" alt="" />
                </label>
              )}
              {imageFile && (
                <button
                  className="absolute right-2 w-6 h-6 text-[12px] top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                  onClick={() => handleRemoveImage2(index)}>
                  X
                </button>
              )}
            </div>
          ))}

          <div className="text-[#fdfdfd] text-sm absolute left-6 rounded-lg bottom-[-10px] bg-[#28448D] px-3 cursor-pointer">
            ارسال عکس
          </div>
        </div>
      </div>
    </div>
  );
}
