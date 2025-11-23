import { TariffType } from "../tariff/tariff.types"

export type SubType = {
    id: string
    userId: string
    tarifPlanId: string
    createdAt: string
    dateEnd: string
    isActive: boolean
}

export type SubTypeInAuth = {
    id: string
    userId: string
    tarifPlanId: string
    createdAt: string
    dateEnd: string
    isActive: boolean
    tarifPlan: TariffType
}