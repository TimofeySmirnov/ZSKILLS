import { AxiosError } from "axios";

export default function ReturnErrorStringUtil(err: unknown): string | undefined {
    if(err instanceof AxiosError) {
        if(err.response) {
            return err.response.data.message
        }
        return
    }
    if(err instanceof Error) {
        return err.message
    }
    return 'Ошибка сервера'
}