"use client";
import AdvantageCard from "../components/AdvantageCard";
import advantagesData from "../data/Advantages.data";

export default function Advantages() {
  return (
    <div className="text-neutral-600 text-center w-6xl flex flex-col items-center p-4 pt-12 gap-6  h-auto rounded-3xl">
      <h2 className=" text-3xl font-semibold">
        Почему онлайн-школы массово <br /> переезжают на ZSkills в 2025?
      </h2>
      <div className="text-neutral-500 pb-6">
        <p>
          ZSkills помогает не только продавать курсы, но и доводить учеников до
          результата. <br /> С удобством для повседневной работы всей команды
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 p-2 w-6xl">
        {advantagesData.map((item, index) => (
          <AdvantageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
