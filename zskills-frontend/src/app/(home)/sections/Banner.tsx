import Button from "@/shared/ui/Button";
import { Star } from "lucide-react";

export default function Banner() {
    const clickToButton = () => {};
    return (
        <div className="text-white text-center w-6xl flex flex-col items-center p-4 pt-12 gap-6 bg-slate-800 h-auto rounded-3xl">
        <span className="font-bold">Платформа для онлайн обучения</span>
        <h2 className="text-4xl font-semibold">
          Платформа{" "}
          <span className="text-emerald-400">
            для создания и продажи <br /> онлайн-курсов,
          </span>{" "}
          на которой удобно <br /> учиться и обучать
        </h2>
        <div className=" text-md font-medium">
          <p>
            Создавайте курсы, которые покупают и проходят до конца. <br />{" "}
            Просто начать, легко масштабировать
          </p>
        </div>
        <div className="flex gap-x-4 py-2 px-4 w-xl">
          <Button
            onClick={clickToButton}
            title="Попробовать бесплатно"
            mode="darkgreen"
          />
          <Button
            onClick={clickToButton}
            title="Записаться на демо"
            mode="transparent"
          />
        </div>
        <div>
          <div className="flex gap-x-2 p-2">
            <div className="flex items-center gap-1">
              <Star stroke="#FFC107" fill="#FFC107" width={18} height={18}/>
              <p>4.8</p>
            </div>
            <span className="text-neutral-400">На основе 400+ отзывов</span>
          </div>
        </div>
      </div>
    )
}