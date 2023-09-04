import HttpClient from './http-client-base'


export class MedicineService extends HttpClient {
    private static apiInstance?: MedicineService

    private constructor() {
        super('https://medconnect-zwk9.onrender.com')
    }

    public static getInstance() {
        if (!this.apiInstance) {
            this.apiInstance = new MedicineService()
        }
        return this.apiInstance
    }

    getPossibleMedicine = (symptoms: string) => this.instance.get<any>('/medicine/possible-medicine')
}