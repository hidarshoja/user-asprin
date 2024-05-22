import React, { useState } from "react";

export default function Movie() {
  const [imageFiles2, setImageFiles2] = useState(Array(4).fill(null));
  const [statusesImg2, setStatusesImg2] = useState(Array(4).fill("empty"));
  const [videoFiles, setVideoFiles] = useState(Array(1).fill(null));
  const [statusesVideo, setStatusesVideo] = useState(Array(1).fill("empty"));

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

  const handleVideoInputChange = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const updatedVideoFiles = [...videoFiles];
      updatedVideoFiles[index] = files[0];
      setVideoFiles(updatedVideoFiles);

      const updatedStatuses = [...statusesVideo];
      updatedStatuses[index] = "uploaded";
      setStatusesVideo(updatedStatuses);
    }
  };

  const handleRemoveVideo = (index) => {
    const updatedVideoFiles = [...videoFiles];
    updatedVideoFiles[index] = null;
    setVideoFiles(updatedVideoFiles);

    const updatedStatuses = [...statusesVideo];
    updatedStatuses[index] = "empty";
    setStatusesVideo(updatedStatuses);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-5">
          <p className="text-[#000] text-[18px] lg:text-[21px]">
            {" "}
            ارسال عکس و ویدیو خدمات درمانی
          </p>
        </div>
        <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
          <img src="./img/Elli.svg" alt="1" />
          <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
        </div>
        <div className="flex items-center justify-start w-full gap-2 px-3 mt-4">
          <img src="./img/Elli.svg" alt="1" />
          <span> گالری تصاویر </span>
        </div>
        <div className="w-[92%] h-full lg:h-[245px] lg:mr-12 mt-16  border-2 border-indigo-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6 px-6">
          <div className="flex flex-col justify-between items-center gap-4 lg:flex-row ">
            <div className="w-[60%] lg:mr-auto lg:w-2/6 flex flex-col px-6">
              <p className="text-[#000] text-sm"> گالری تصاویر پزشک</p>
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
          </div>
        </div>
        <div className="rounded-xl w-[127px] py-1.5 px-2 bg-[#28448D] flex items-center justify-center text-white text-sm absolute left-20 lg:bottom-0 cursor-pointer">
          <span> ارسال تصاویر</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-start w-full gap-2 px-3 mt-4">
          <img src="./img/Elli.svg" alt="1" />
          <span> ارسال ویدیو </span>
        </div>
        <div className="w-[92%] h-full lg:min-h-[245px] lg:mr-12 mt-16  border-2 border-indigo-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6 px-6">
          <div className="flex flex-col justify-between items-center gap-4 lg:flex-row ">
            <div className="w-[60%]  lg:w-2/6 flex flex-col px-6">
              <p className="text-[#000] text-sm"> گالری ویدیو پزشک</p>
              <p className="text-[#000] text-[9px]">
                – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
                - سایز عکس 400 در 400 پیکسل باشد. <br />
                – فرمت عکس jpg باشد. <br />
                – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
              </p>
            </div>

            {videoFiles.map((videoFile, index) => (
              <div
                className="w-full lg:w-2/6 h-[132px] border border-[##D4D3CF] rounded-lg relative p-1"
                key={index}>
                {videoFile ? (
                  <video
                    src={URL.createObjectURL(videoFile)}
                    className="w-full h-full rounded-lg"
                    controls
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full rounded-lg bg-gray-200">
                    <span className="text-[12px] font-semibold">
                      ویدیو{" "}
                      {statusesVideo[index] === "empty" ? "جدید" : "آپلود شده"}
                    </span>
                  </div>
                )}
                {statusesVideo[index] === "empty" && (
                  <label className="absolute left-[-12px] top-[45px] cursor-pointer">
                    <input
                      type="file"
                      accept="video/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleVideoInputChange(index, e)}
                    />
                    <img src="/img/pluss2.svg" alt="" />
                  </label>
                )}
                {videoFile && (
                  <button
                    className="absolute right-2 w-6 h-6 text-[12px] top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                    onClick={() => handleRemoveVideo(index)}>
                    X
                  </button>
                )}
              </div>
            ))}
            <div className="text-sm bg-[#28448D] px-2 py-1 c flex items-center justify-center text-white rounded-md">
              ذخیره و ارسال به تلگرام آسپرین
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-[127px] py-1.5 px-2 bg-[#F9E6BE] flex items-center justify-center text-sm mt-10 absolute left-20 lg:bottom-30 cursor-pointer">
        <span> ذخیره</span>
      </div>
    </div>
  );
}
