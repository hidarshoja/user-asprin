export const navigation = [
  {
    name: "داشــبـورد کاربر",
    href: "/",
    current: false,
    src: "/img/menu3.svg",
  },
  {
    name: "پروفـــایل من",
    current: false,
    src: "/img/menu1.svg",
    children: [
      { name: "پروفایل من", href: "/profile" },
      { name: "ارسال مدارک", href: "/document" },
      { name: "اطلاعات تکمیلی خدمات و مطب", href: "/information" },
      { name: "عکس و ویدیو", href: "/picture-movie" },
    ],
  },
  {
    name: "اشتراک",
    href: "/subscription",
    current: false,
    src: "/img/menu6.svg",
  },
  {
    name: "نمــودار بازدید",
    href: "/chart",
    current: false,
    src: "/img/chart.svg",
  },
  { name: "مالی", href: "/financial", current: false, src: "/img/menu7.svg" },
  {
    name: "پشتیبانی",
    href: "/support",
    current: false,
    src: "/img/menu8.svg",
    children: [
      { name: "(پیام ها)لیست تمام تیکت ها", href: "/ticket-list" },
      { name: "ارسال تیکت", href: "/ticket-send" },
    ],
  },
  {
    name: "اخبار و اطلاعیه ها",
    href: "/news",
    current: false,
    src: "/img/news.svg",
  },

  {
    name: "رمز عبور",
    href: "/password",
    current: false,
    src: "/img/menu9.svg",
  },
];
