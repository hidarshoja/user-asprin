import React from "react";

const result = [
  {
    id: 1,
    title: "اخبار و اعلامیه ها",
    content: "منو ویژه آکادمی بازه، فقط دو روز فرصت داری جاتو رزرو کنی ...",
  },
  {
    id: 2,
    title: "اخبار و گزارش ها",
    content: "منو ویژه آکادمی بازه، فقط دو روز فرصت داری جاتو رزرو کنی ...",
  },
  {
    id: 3,
    title: "اخبار و اطلاعیه ها",
    content: "منو ویژه آکادمی بازه، فقط دو روز فرصت داری جاتو رزرو کنی ...",
  },
  {
    id: 4,
    title: "اخبار و برنامه  ها",
    content: "منو ویژه آکادمی بازه، فقط دو روز فرصت داری جاتو رزرو کنی ...",
  },
  {
    id: 5,
    title: "اخبار   ",
    content: "منو ویژه آکادمی بازه، فقط دو روز فرصت داری جاتو رزرو کنی ...",
  },
];

export default function News() {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اخبار و اطلاعیه ها{" "}
        </p>
      </div>

      <div className="w-[92%] h-full lg:mr-12 mt-16 border border-2 border-indigo-[#D4D3CF] rounded-xl min-h-[160px] relative p-5 ">
        <div className="absolute top-[-10px]  px-2 right-6 bg-white text-[#ADACA8] text-sm">
          اخبار و اطلاعیه ها
        </div>
        {result.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-[263px] lg:h-[101px] flex flex-col lg:flex-row justify-between items-center p-5 mt-16 border border-[#D4D3CF] border-s-4  border-s-[#FFD95E] rounded-lg ">
              <div className="flex flex-col w-full gap-3">
                <p className="text-base">همین الان جاتو رزرو کن</p>
                <span className="text-xs  ">{item.content}</span>
              </div>
              <div className="flex flex-col gap-3 w-full items-end">
                <span className="text-[#D4D3CF] text-xs">۱ هفته قبل</span>
                <p className="text-base hidden lg:block">مشاهده کامل اطلاعیه</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
