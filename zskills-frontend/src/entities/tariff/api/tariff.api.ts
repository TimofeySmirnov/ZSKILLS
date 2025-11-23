import api from "@/services/axios.config";

export class TariffApi {
    static async getAll() {
        return api.get('/tariff/all')
    }
}