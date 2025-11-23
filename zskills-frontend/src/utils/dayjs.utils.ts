import dayjs from "dayjs";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("ru")
dayjs.extend(localizedFormat)

export default function convertDate(date: string | undefined) {
    if(!date) return ''
    return dayjs(date).format("DD MMMM YYYY")
}