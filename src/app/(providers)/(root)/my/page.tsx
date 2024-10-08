"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import supabase from "../../../../../supabase/supabase.client";
import Deal from "../../../../../types/deal.types";

interface DealsListProps {
  deals: Deal[];
}

function MyDeals({ deals }: DealsListProps) {
  supabase.from("deals").select("*");

  return (
    <main className="px-5 lg:px-8 flex flex-col grow w-full items-stretch py-6 lg:py-10 max-w-screen-lg mx-auto">
      <h1 className="font-extrabold text-2xl text-left mt-10">내 판매글</h1>
      <ul className="grid grid-cols-3 gap-x-8 gap-y-12">
        <li className="mt-11 relative flex flex-col">
          <Link
            // key={deal.id}
            className="relative flex flex-col"
            // href={`/products/${deals.id}`}
            href="/products"
          >
            <div className="relative mb-4 aspect-[3/4]">
              <img
                src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/v2/6/4/8/2/7/5/jnPXx/6642648275_B.jpg"
                alt=""
                className="object-cover absolute h-full w-full"
              />
            </div>
            {deals &&
              deals.map((deal) => (
                <ul key={deal.id} className="grid gap-y-2">
                  <li className="text-sm font-black">{deal.title}</li>
                  <li className="font-extrabold">{deal.price}</li>
                  <li className="text-sm font-semibold">{deal.location}</li>
                  <li className="text-xs">관심 22</li>
                </ul>
              ))}
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default MyDeals;
