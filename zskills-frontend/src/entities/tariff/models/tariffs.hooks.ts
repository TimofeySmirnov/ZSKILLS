import { shallowEqual, useSelector } from "react-redux"
import { selectAllTariffs } from "./tariff.selectors"

export const useAlltariffs = () => {
    return useSelector(selectAllTariffs, shallowEqual)
}