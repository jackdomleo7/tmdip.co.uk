export default class CompanyInfo {
  public static get companyName(): string {
    return process.env.VUE_APP_NAME;
  }
}
