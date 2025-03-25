"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Fetch data from your API
  const [data, setData] = useState();
  // if (!data) return;

  useEffect(() => {
    const func = async () => {
      const data = await fetch("http://localhost:3000/api/employees").then(
        (res) => res.json()
      );
      setData(data);
    };
    func();
  }, []);
  console.log("data", data);

  // Render your data
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data?.employees?.map((data, index) => {
        return (
          <div
            key={index}
            className="p-4 bg-white rounded-md shadow-sm text-black"
          >
            <h2>{data.test}</h2>
            <p>{data.id}</p>
          </div>
        );
      })}
    </div>
  );
}
