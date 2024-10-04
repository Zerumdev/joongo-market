/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <main className="px-5 lg:px-8 flex flex-col grow w-full items-stretch py-6 lg:py-10 max-w-screen-lg mx-auto">
      <h1 className="font-extrabold text-2xl text-left mt-10">전체 판매글</h1>
      <ul className="grid grid-cols-3 gap-x-8 gap-y-12">
        <li className="mt-11 relative flex flex-col">
          <Link className="relative flex flex-col" href="/deals">
            <div className="relative mb-4 aspect-[3/4]">
              <img
                src=""
                alt=""
                className="object-cover absolute h-full w-full"
              />
            </div>

            <div className="grid gap-y-2">
              <div className="text-sm font-black">
                샘플 ㄴㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇ ㅁㄴㅇㄹㅇㅁ...
              </div>
              <span className="font-extrabold">100,000원</span>
              <p className="text-sm font-semibold">서울 마포구 상암동</p>
              <p className="text-xs">관심 22</p>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
