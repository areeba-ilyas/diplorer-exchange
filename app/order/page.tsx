"use client";
import React from "react";
import { Copy, Lock } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Users, Hourglass, Wrench, Check, ArrowRight } from "lucide-react";

const Page = () => {
  const steps = [
    { label: "Awaiting deposit", icon: Users },
    { label: "Awaiting confirmations", icon: Hourglass },
    { label: "Perform exchange", icon: Wrench },
    { label: "Done", icon: Check },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0B0E1A] text-gray-900 dark:text-white p-4 sm:p-6 mt-20">
      {/* Wrapper with fixed width */}
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div
          className="rounded-lg p-6 flex flex-col md:flex-row justify-center items-center shadow 
          bg-[url('/bg-white.svg')] dark:bg-[url('/bg-dark.svg')] bg-cover bg-center gap-6"
        >
          {/* Left - BTC */}
          <div className="text-center md:text-left">
            <p className="text-sm dark:text-[#CDE7FF] text-[#656B79]">YOU SEND</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F7931A]">
                0.00043187 BTC
              </h2>
              <img
                src="https://ff.io/assets/images/coins/svg/btc.svg"
                alt="BTC"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300 mt-1 break-all">
              bc1qaxxtedad7jppa6sc2emhqatkhpy0ekze2666ps
            </p>
          </div>

          {/* Middle Arrow */}
          <FaLongArrowAltRight className="h-6 w-6 dark:text-white text-black hidden md:block" />

          {/* Right - BSC */}
          <div className="text-center md:text-right">
            <p className="text-sm dark:text-[#CDE7FF] text-[#656B79]">YOU RECEIVE</p>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F0B90B]">
                0.0107687 BSC
              </h2>
              <img
                src="https://ff.io/assets/images/coins/svg/bsc.svg"
                alt="BSC"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300 mt-1 break-all">
              0x835347ceDE69c51De182b2925BfcE9A041031359
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Order Info */}
          <div
            className="rounded-lg p-6 flex flex-col shadow 
            bg-[url('/bg-white.svg')] dark:bg-[url('/bg-dark.svg')] bg-cover bg-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">Order ID</p>
            <h3 className="font-bold text-lg sm:text-xl flex items-center gap-2 text-[#F7931A]">
              7E3NXS <Lock size={16} className="text-gray-400" />
            </h3>

            <div className="border-t border-gray-300 dark:border-gray-600 my-4" />

            <p className="text-sm text-gray-500 dark:text-gray-400">Time remaining</p>
            <h3 className="font-bold text-lg sm:text-xl text-[#F7931A]">29:21</h3>

            <div className="border-t border-gray-300 dark:border-gray-600 my-4" />

            <p className="text-sm text-gray-500 dark:text-gray-400">Order type</p>
            <h3 className="font-bold text-base sm:text-lg">Float rate</h3>

            <div className="border-t border-gray-300 dark:border-gray-600 my-4" />

            <p className="text-sm text-gray-500 dark:text-gray-400">Creation Time</p>
            <h3 className="font-bold text-base sm:text-lg">09/20/2025 11:58 PM</h3>
          </div>

          {/* Deposit Info */}
          <div
            className="rounded-lg p-6 md:col-span-2 shadow 
            bg-[url('/bg-white.svg')] dark:bg-[url('/bg-dark.svg')] bg-cover bg-center"
          >
            <p className="text-sm sm:text-base dark:text-[#CDE7FF] text-[#656B79]">
              Send{" "}
              <span className="text-[#F7931A] font-bold text-base sm:text-lg">
                0.00043187 BTC
              </span>{" "}
              to the address:
            </p>

            <p className="mt-3 break-all flex items-center gap-2 font-semibold text-base sm:text-lg text-black dark:text-[#CDE7FF]">
              bc1qaxxtedad7jppa6sc2emhqatkhpy0ekze2666ps
              <Copy size={18} className="cursor-pointer text-gray-400 hover:text-white" />
            </p>

            <p className="text-sm sm:text-base text-gray-400 mt-4">
              The exchange rate will be fixed after receiving{" "}
              <span className="font-semibold text-white">1</span> network confirmations:
            </p>

            <div className="border-t border-gray-500/50 my-4 sm:mt-36" />

            <p className="text-sm sm:text-base dark:text-[#CDE7FF] text-[#656B79]">
              Receiving address ETH
            </p>
            <p className="font-bold text-base sm:text-lg break-all mt-2 text-black dark:text-[#CDE7FF]">
              0x835347ceDE69c51De182b2925BfcE9A041031359
            </p>
          </div>

          {/* QR Code */}
          <div
            className="rounded-lg p-4 flex flex-col items-center justify-center shadow bg-white"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qaxxtedad7jppa6sc2emhqatkhpy0ekze2666ps"
              alt="QR Code"
              className="w-full  h-full object-contain"
            />

            <div className="flex w-full mt-3 text-xs sm:text-sm font-medium">
              <div className="flex-1 text-center py-1 rounded-l-lg bg-gray-200 text-gray-500">
                Address
              </div>
              <div className="flex-1 text-center py-1 rounded-r-lg bg-white text-black dark:bg-gray-100 dark:text-gray-900 border-l border-gray-300">
                With amount
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 mt-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === 0; // only first active for now

            return (
              <div key={idx} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-2 
                    ${isActive ? "bg-[#1E90FF] text-white" : "bg-[#1E90FF] text-white opacity-45"}`}
                  >
                    <Icon size={28} />
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden sm:block mx-6 text-gray-400 dark:text-gray-500" />
                )}
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div
            className="rounded-lg p-4 shadow 
            bg-[url('/bg-white.svg')] dark:bg-[url('/bg-dark.svg')] bg-cover bg-center"
          >
            <h4 className="font-bold mb-2">What do you need to know?</h4>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              You only need 1 confirmation of the Bitcoin blockchain for the exchange.
            </p>
          </div>
          <div
            className="rounded-lg p-4 shadow 
            bg-[url('/bg-white.svg')] dark:bg-[url('/bg-dark.svg')] bg-cover bg-center"
          >
            <h4 className="font-bold mb-2">Order status notifications</h4>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Stay updated about your transaction in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
