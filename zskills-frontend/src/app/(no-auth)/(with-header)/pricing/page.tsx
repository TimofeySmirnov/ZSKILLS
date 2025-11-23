'use client'

import TariffBunner from "@/entities/tariff/ui/TariffBanner"
import TariffesArray from "@/entities/tariff/ui/TariffesArray"

export default function PricingPage() {
    return (
        <div className="py-6 flex flex-col gap-4">
            <TariffBunner />
            <TariffesArray/>
        </div>
    )
}