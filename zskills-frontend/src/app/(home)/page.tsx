"use client";

import Advantages from "./sections/Advantages";
import Banner from "./sections/Banner";

export default function HomePage() {
  
  return (
    <div className="flex flex-col items-center px-2 gap-y-8 py-4">
        <Banner />
        <Advantages />
    </div>
  );
}
