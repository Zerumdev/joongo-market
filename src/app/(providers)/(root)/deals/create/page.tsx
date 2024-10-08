"use client";

import { useState } from "react";
import { Database } from "../../../../../../supabase/database.types";
import supabase from "../../../../../../supabase/supabase.client";

function DealsCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const handleClickCreateDeals = async () => {
    const data: Database["public"]["Tables"]["deals"]["Insert"] = {
      title,
      content,
      location,
      price,
    };

    const res = await supabase.from("deals").insert(data);

    console.log(res);
  };

  return (
    <main className="px-5 lg:px-8 flex flex-col grow w-full items-stretch py-6 lg:py-10 max-w-screen-lg mx-auto">
      <h1 className="font-extrabold text-2xl text-left mt-10">
        판매글 작성하기
      </h1>
      <ul>
        <li className="grid grid-cols-1 gap-y-5 font-semibold text-[15px]">
          <p className="mt-20">글 제목 </p>
          <input
            name="title"
            className="border p-4"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="글의 제목을 작성해주세요."
          />

          <p className="mt-5">글 내용 </p>
          <input
            name="content"
            className="border p-4 h-60"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="글의 내용을 작성해주세요."
          />
          <p className="mt-5">작성 위치(혹 직거래 위치) </p>

          <input
            name="location"
            className="border p-4"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="작성하시는 위치(혹은 직거래 하실 위치) 를 작성해주세요."
          />

          <p className="mt-5">판매 가격 </p>
          <input
            name="price"
            className="border p-4"
            type="number"
            placeholder="판매하실 물건의 가격을 작성해주세요"
            onChange={(e) => setPrice(e.target.valueAsNumber)}
            value={price}
          />
          <button
            onClick={handleClickCreateDeals}
            className="bg-blue-500  text-white p-4 mt-20 font-bold "
          >
            판매글 작성하기
          </button>
        </li>
      </ul>
    </main>
  );
}

export default DealsCreatePage;
