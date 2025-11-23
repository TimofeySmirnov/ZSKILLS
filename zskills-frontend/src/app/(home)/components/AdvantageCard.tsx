'use client'
import clsx from "clsx";
import { advantagesColors, advantagesDataType, advantagestextAlign } from "../data/Advantages.data";


const colorInProps: Record<advantagesColors , string> = {
    gray: 'bg-neutral-200 text-neutral-600',
    green: 'bg-emerald-500 text-white',
    slate: 'bg-slate-800 text-white'
}

const textAlignInProps: Record<advantagestextAlign, string> = {
    center: 'text-center',
    start: 'text-start'
}

export default function AdvantageCard(props: advantagesDataType) {
    const {title, description, textAlign, color} = props
    const colorClx = colorInProps[color]
    const textClx = textAlignInProps[textAlign]
    const className = clsx(
        colorClx,
        textClx,
        'w-full py-8 px-10 gap-2 rounded-3xl'
    )
    return (
        <div className={className}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className=" font-medium"><p>{description}</p></div>
        </div>
    )
}