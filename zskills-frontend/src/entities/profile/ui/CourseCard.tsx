'use client'

import { CoureseOnlyType } from "@/entities/course/course.types";
import { Routes } from "@/shared/data/routes.data";
import { cutText } from "@/utils/cutText";
import { useRouter } from "next/navigation";

type CourseCardProps = {
  c: CoureseOnlyType;
};

export default function CourseCard({ c }: CourseCardProps) {
    const router = useRouter()
    const handleClick = () => [
        router.push(Routes.COURSE_PAGE(c.id))
    ]
  

  const name = cutText(c.name, 40);
  const description = c.description ? cutText(c.description, 120) : null;

  return (
    <div className="flex flex-col max-w-1/4 p-4 rounded-2xl shadow-lg gap-2 border border-emerald-400 hover:cursor-pointer" onClick={handleClick}>
      <h4 className="text-2xl font-semibold text-neutral-700">{name}</h4>

      <div className="text-neutral-500">
        <p>{description}</p>
      </div>
    </div>
  );
}
