export type advantagesColors = 'gray' | 'slate' | 'green'
export type advantagestextAlign = 'center' | 'start'

export type advantagesDataType = {
    title: string,
    description: string,
    textAlign: advantagestextAlign
    color: advantagesColors
}

const advantagesData: advantagesDataType[] = [
    {
        title: 'Удобно ученикам и всей команде',
        description: 'Современный дизайн — ученики не теряются, а вам приятнее работать',
        textAlign: 'center',
        color: 'slate'
    },
    {
        title: 'Всё, что вам нужно — только лучше',
        description: 'Уроки, задания, тесты, сертификаты, платежи — удобнее, чем обычно',
        textAlign: 'center',
        color: 'gray'
    },
    {
        title: 'Курсы и вебинары — в одной платформе',
        description: 'Забудьте про Zoom, YouTube и OBS. Пользуйтесь единой экосистемой',
        textAlign: 'center',
        color: 'green'
    },
    {
        title: 'Продуманные детали, которых нет у других',
        description: 'Каталог вебинаров, авто-апселлы и еще 30+ уникальных возможностей',
        textAlign: 'start',
        color: 'gray'
    },
    {
        title: 'Безлимит учеников и файлов',
        description: 'Обучайте и храните материалы без ограничений',
        textAlign: 'start',
        color: 'gray'
    },
    {
        title: 'Можно начать бесплатно',
        description: 'Тарифы от 0 руб. Запустите курс и получите первых учеников без бюджета',
        textAlign: 'start',
        color: 'gray'
    },
]

export default advantagesData