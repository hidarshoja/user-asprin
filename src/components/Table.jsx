import React from "react";
export const people = [
  {
    id : 1 ,
    name: "ندا میر حاجی",
    price: 10000000,
    type: "موفقیت آمیز",
    time: "1402-04-23 15:36",
    dic : "12 ماهه"
  },
  {
    id : 2 ,
    name: "ندا میر حاجی",
    price: 500000,
    type: "رد شده",
    time: "1402-04-23 15:36",
    dic : "12 ماهه"
  },
  {
      id : 3 ,
      name: "مریم میر حاجی",
      price: 10000000,
      type: "موفقیت آمیز",
      time: "1402-04-23 15:36",
      dic : "6 ماهه"
    },
    {
      id : 4 ,
      name: "ندا  حاجی",
      price: 150000,
      type: "رد شده",
      time: "1402-04-23 15:36",
      dic : "12 ماهه"
    },
];


export default function TableComment() {
  
  return (
    <div className="px-1 lg:px-6">
      <div className="hidden  mt-8 lg:flow-root">
        <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    
                    <th
                      scope="col"
                      className="px-3 pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A] flex items-center gap-2 justify-center"
                    >
                     
                      ردیف
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      کاربر
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      مبلغ
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      نوع تراکنش
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      زمان 
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      توضیحات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      {new Intl.NumberFormat('fa-IR').format(person.price)}
                        تومان
                       
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.dic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
      {people.map((person) => ( 
        <div className="w-[90%] mx-auto flex flex-col  min-h-[270px] rounded-[20px] mt-5 border border-[#dbdbdb] " key={person.id}>
          <div className="flex items-center justify-center">
            <div className="w-1/3 flex items-center justify-center gap-2">
              ردیف
            </div>
            <div className="w-2/3 text-center border-r py-3 border-[#dbdbdb] ">
            {person.id}
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">کاربر</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
             {person.name}
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">مبلغ</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
            {new Intl.NumberFormat('fa-IR').format(person.price)}
                        تومان
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3"> نوع تراکنش </span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
              <div>
                <div>
                {person.type}
                  
                     </div>
               
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">ارسال شده در</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">           
            {person.time}
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">توضیحات</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
            {person.dic}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
