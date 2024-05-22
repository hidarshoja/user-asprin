import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navigation } from "./constant/Menu";

import "./App.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div>
        {location.pathname !== "/Login" && (
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50  lg:hidden"
              onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full">
                  <Dialog.Panel className="relative mr-0 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="absolute right-[82%] top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}>
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>

                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center">
                        <img
                          className="h-8 w-auto"
                          src="/img/logo.svg"
                          alt="Your Company"
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li
                                  key={item.name}
                                  className="flex items-start">
                                  <img
                                    src={item.src}
                                    alt={item.name}
                                    className="w-6 h-6 mr-2"
                                  />
                                  {!item.children ? (
                                    <Link
                                      onClick={() => setSidebarOpen(false)}
                                      to={item.href}
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-50"
                                          : "hover:bg-gray-50 hover:text-gray-700",
                                        "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-white",
                                      )}>
                                      {item.name}
                                    </Link>
                                  ) : (
                                    <Disclosure as="div" dir="ltr">
                                      {({ open }) => (
                                        <>
                                          <Disclosure.Button
                                            className={classNames(
                                              item.current
                                                ? "bg-gray-50"
                                                : "hover:bg-gray-50 hover:text-gray-700",
                                              "flex items-center justify-end w-full  rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-white",
                                            )}>
                                            <ChevronRightIcon
                                              className={classNames(
                                                open
                                                  ? "rotate-90 text-gray-500"
                                                  : "text-white rotate-180",
                                                "h-5 w-5 shrink-0",
                                              )}
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Disclosure.Button>
                                          <Disclosure.Panel
                                            as="ul"
                                            className="mt-1 px-2">
                                            {item.children.map((subItem) => (
                                              <li key={subItem.name}>
                                                <Disclosure.Button
                                                  as={Link}
                                                  to={subItem.href}
                                                  onClick={() =>
                                                    setSidebarOpen(false)
                                                  }
                                                  className={classNames(
                                                    subItem.current
                                                      ? "bg-gray-50"
                                                      : "hover:bg-gray-50 hover:text-gray-700",
                                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700",
                                                  )}>
                                                  {subItem.name}
                                                </Disclosure.Button>
                                              </li>
                                            ))}
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li></li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        )}

        {location.pathname !== "/Login" && (
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-hidden bg-color1  pb-4">
              <div className="w-full  flex flex-col h-20  items-center mt-3 justify-center">
                <img
                  className="h-20 w-[112px] mt-[30px]"
                  src="/img/logo.svg"
                  alt="Your Company"
                />
                <div className="w-full h-8 mt-10">
                  <div className="w-full h-[1px] bg-color2"></div>
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[80%] relative">
                      <div className="w-full flex overflow-hidden bg-white  h-8 rounded-[51px] border border-[#5B7380] absolute top-[-16px]">
                        <div className="w-1/2 bg-[#FDCB44] flex items-center justify-center gap-1">
                          <div>
                            <img
                              src="/img/userA.svg"
                              className="w-[13px] h-[13px]"
                              alt=""
                            />
                          </div>
                          <div className="text-color3 text-[12px]">صفحه من</div>
                        </div>
                        <div className="w-1/2 bg-[#FBFAF6] flex items-center justify-center gap-1 cursor-pointer">
                          <div className="text-color3 text-[12px]">خروج</div>
                          <div>
                            <img
                              src="/img/exit.svg"
                              className="w-[13px] h-[13px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="flex flex-1 flex-col mt-16 px-6">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start gap-3 hover:bg-gradient-to-r from-amber-500 to-gray-700">
                          {!item.children ? (
                            <NavLink
                              to={item.href}
                              className={classNames(
                                item.current ? "bg-gray-50" : "",
                                "flex item-center rounded-md w-full py-2 pr-2 pl-10 gap-2 text-sm leading-6 font-semibold text-color4",
                              )}>
                              <img
                                src={item.src}
                                alt={item.name}
                                className="w-6 h-6 mr-2"
                              />
                              {item.name}
                            </NavLink>
                          ) : (
                            <Disclosure as="div" dir="ltr">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className={classNames(
                                      item.current ? "bg-gray-50" : "",
                                      "flex justify-end items-center w-full  rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-color4",
                                    )}>
                                    <ChevronRightIcon
                                      className={classNames(
                                        open
                                          ? "rotate-90 text-gray-100"
                                          : "text-gray-100 rotate-180",
                                        "h-5 w-5 shrink-0",
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                    <img
                                      src={item.src}
                                      alt={item.name}
                                      className="w-6 h-6 mr-2"
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel
                                    as="ul"
                                    className="mt-1 px-2 bg-white w-[120%] rounded-r-md pr-[5.5rem]">
                                    {item.children.map((subItem) => (
                                      <li
                                        key={subItem.name}
                                        className="list-disc "
                                        dir="rtl">
                                        <Disclosure.Button
                                          as={Link}
                                          to={subItem.href}
                                          className={classNames(
                                            subItem.current
                                              ? "bg-gray-50"
                                              : "hover:bg-white text-gray-700",
                                            "block rounded-md py-2 pr-2 pl-9 text-[11px] leading-6 text-color4",
                                          )}>
                                          {subItem.name}
                                        </Disclosure.Button>
                                      </li>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li></li>
                </ul>
              </nav>
            </div>
          </div>
        )}
        <div className="lg:pr-72">
          {location.pathname !== "/Login" && (
            <div className="sticky top-0 z-40 flex min-h-16 shrink-0 items-center gap-x-4 bg-color1 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-white lg:hidden"
                onClick={() => setSidebarOpen(true)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="h-6 w-px bg-gray-900/10 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-1 py-2 gap-x-4 justify-end md:justify-end lg:py-0 lg:gap-x-6">
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-100 hover:text-green-600">
                    <span className="sr-only">پیام ها </span>
                  </button>

                  <Menu
                    as="div"
                    className="flex gap-3 justify-end md:justify-center w-full flex-wrap">
                    <div className="w-[166px] md:w-[234px] flex overflow-hidden bg-white  h-7  rounded-[11px] border border-[#5B7380]">
                      <div className="w-2/3  flex items-center justify-center gap-1">
                        <div>
                          <img
                            src="/img/zahra.svg"
                            className="w-[20px] h-[20px] rounded-[20px] border border-[#000]"
                            alt=""
                          />
                        </div>
                        <div className="text-color3 text-sm md:text-[16px]">
                          زهرا اصلان زاده
                        </div>
                      </div>
                      <div className="w-1/3 bg-[#FBFAF6] flex border-r border-gray-400 items-center justify-center gap-1 cursor-pointer">
                        <div className="text-color3 text-[12px]">مدیر کل</div>
                      </div>
                    </div>

                    <div className="w-[166px] flex overflow-hidden bg-[#304A59]  h-7  rounded-[11px] border border-[#5B7380]">
                      <div className="w-1/2  flex items-center justify-center gap-1">
                        <div>
                          <img
                            src="/img/userW.svg"
                            className="w-[17px] h-[17px]"
                            alt=""
                          />
                        </div>
                        <div className="text-white text-[12px]">
                          دکتر آسپرین
                        </div>
                      </div>
                      <div className="w-1/2  flex items-center justify-center gap-1 cursor-pointer  border-r border-gray-500">
                        <div className="text-white text-[12px]">خروج</div>
                        <div>
                          <img
                            src="/img/exitW.svg"
                            className="w-[17px] h-[17px]"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>
          )}

          <div>
            <main>
              <div className="p-2 ">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
