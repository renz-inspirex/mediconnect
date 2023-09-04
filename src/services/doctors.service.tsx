import HttpClient from "./http-client-base"

export class DoctorsService extends HttpClient {
  private static apiInstance?: DoctorsService

  private constructor() {
    super("https://nowserving.ph/api")
  }

  public static getInstance() {
    if (!this.apiInstance) {
      this.apiInstance = new DoctorsService()
    }
    return this.apiInstance
  }

  getDoctors = (
    specializations?: string,
    location?: string,
    hospital?: string,
    limit: number = 10,
    offset: number = 0
  ) =>
    this.instance.get<any>("/directory/getdoctors", {
      params: {specializations, hospital, location, limit, offset},
    })
}
