import { TariffType } from "../dto/tariff.dto";


export class TariffNames {
    static TRIAL = 'Пробный'
    static BASIC = 'Базовый'
    static EXTENDED = 'Расширенный'
    static PREMIUM = 'Премиум'
}

const tariffsData: TariffType[] = [
    {
        name: TariffNames.TRIAL,
        price: 0,
        duration: 14,
        maxCourses: 3
    },
    {
        name: TariffNames.BASIC,
        price: 399,
        duration: 30,
        maxCourses: 10
    },
    {
        name: TariffNames.EXTENDED,
        price: 599,
        duration: 30,
        maxCourses: 20
    },
    {
        name: TariffNames.PREMIUM,
        price: 899,
        duration: 30,
        maxCourses: 50
    },
]

export default tariffsData