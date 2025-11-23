import clsx from "clsx"

type bodyModesType = 'comment' | 'empty'
type bodyModesStylesType = Record<bodyModesType, string>

type CommentProps = {
    mode: bodyModesType
}

const bodyModes: bodyModesStylesType = {
    comment: 'bg-white',
    empty: 'bg-emerald-800'
}

const textModes: bodyModesStylesType = {
    comment: 'text-neutral-500',
    empty: 'text-transparent pointer-events-none select-none'
}

const authorTextModes: bodyModesStylesType = {
    comment: 'text-white',
    empty: 'text-transparent'
}

const authorLogoBd: bodyModesStylesType = {
    comment: 'bg-neutral-400',
    empty: 'bg-emerald-800'
}

const authorNameModes: bodyModesStylesType = {
    comment: '',
    empty: 'rounded-2xl bg-emerald-800'
}

export default function Comment(props: CommentProps) {
    const {mode} = props
    const bodyClx = bodyModes[mode]
    const textClx = textModes[mode]
    const authorTextClx = authorTextModes[mode]
    const authorLogoClx = authorLogoBd[mode]
    const authorNameClx = authorNameModes[mode]

    const bodyClassName = clsx(
        'flex flex-col p-2 gap-4 h-fit w-fit',
        textClx
    )

    const bodyCommentClassName = clsx(
        'rounded-4xl rounded-bl-none flex flex-col gap-6 py-4 px-6',
        bodyClx
    )
    
    const authorBodyClassName = clsx(
        'flex items-center h-fit gap-2',
        authorTextClx
    )
    const authorLogoClassName = clsx(
        'rounded-[50%] w-[50px] h-[50px]',
        authorLogoClx
    )
    const authorNameClassName = clsx(
        'flex flex-col justify-between',
        authorNameClx
    )
  return (
    <div className={bodyClassName}>
      <div className={bodyCommentClassName}>
        <h2 className="text-2xl font-semibold">
          Сэкономил кучу времени <br />с помощью этой платформы{" "}
        </h2>
        <div>
          <p>
            Главная радость от пользования сервисом – возможность <br />{" "}
            настроить так, чтобы всё работало без тебя{" "}
          </p>
        </div>
        <div>
          <p>
            Я лишь могу заходить изредка в личный кабинет и выводить <br />{" "}
            деньги, а материалы работают и делают мир лучше{" "}
          </p>
        </div>
      </div>
      <div className={authorBodyClassName}>
        <div className={authorLogoClassName}></div>
        <div className={authorNameClassName}>
          <h3 className={`font-bold ${authorNameClx}`}>Илья Мыс</h3>
          <div className={authorNameClx}><p>Основатель школы DJ-LAB</p></div>
        </div>
      </div>
    </div>
  );
}
