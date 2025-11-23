import Button from "@/shared/ui/Button";
import { TariffType } from "../tariff.types";
import { SubType } from "@/entities/subscribe/subscribe.types";
import convertDate from "@/utils/dayjs.utils";

type TariffCardProps = {
  tariff: TariffType;
  currentSub: SubType | null;
};



export default function TariffCard({ tariff, currentSub }: TariffCardProps) {
  const isTrialTariff = tariff.name === "Пробный";
  const isCurrentSub = currentSub ? currentSub.tarifPlanId === tariff.id : false
  return (
    <div
      className={`flex flex-col gap-4 items-center py-4 shadow-xl rounded-2xl w-full text-neutral-700 ${
        isTrialTariff ? "justify-center" : "" 
      } ${
        isCurrentSub ? "opacity-80" : ""
      }`}
    >
      {isCurrentSub && currentSub?.dateEnd && (
        <span className="opacity-100 text-emerald-600">
          Действует до {convertDate(currentSub.dateEnd)}
        </span>
      )}
      <h2 className="text-2xl font-semibold">{tariff.name}</h2>
      <ul>
        <li>
          Курсов: <span className="text-emerald-600">{tariff.maxCourses}</span>
        </li>
      </ul>
      <div>
        {isTrialTariff ? (
          <p className="text-center">
            Выдается при регистрации <br /> на {tariff.duration} дней
          </p>
        ) : (
          <p className="flex gap-1 items-center">
            <span className="text-slate-700 text-xl">{tariff.price}</span>
            ₽/месяц
          </p>
        )}
      </div>
      {!isTrialTariff && !isCurrentSub && (
        <div>
          <Button title="Перейти к оформлению" mode="darkgreen" />
        </div>
      )}
      {isCurrentSub && (
        <div>
          <Button title="Продлить" mode="darkgreen" />
        </div>
      )}
    </div>
  );
}
