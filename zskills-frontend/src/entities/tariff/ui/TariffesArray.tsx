import { useEffect } from "react";
import { TariffType } from "../tariff.types";
import { store } from "@/store/store";
import { getAllTariffs } from "../models/tariff.slice";
import { useAlltariffs } from "../models/tariffs.hooks";
import TariffCard from "./TariffCard";
import { useCurrentSub } from "@/entities/user/models/user.hooks";

export default function TariffesArray() {
  useEffect(() => {
    store.dispatch(getAllTariffs());
  }, []);
  const tariffs = useAlltariffs();
  const currentSub = useCurrentSub()
  return (
    <div className="flex justify-between px-20 py-5 gap-4">
      {tariffs.map((tarif) => (
        <TariffCard tariff={tarif} key={tarif.id} currentSub={currentSub}/>
      ))}
    </div>
  );
}
