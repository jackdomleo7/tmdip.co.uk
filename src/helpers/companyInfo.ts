export default class CompanyInfo {
  private static readonly _registration: string = '11272002';
  private static readonly _vatNumber: string = '291620212';

  public static get companyName(): string {
    return process.env.VUE_APP_NAME;
  }

  public static get companyRegistration(): string {
    return this._registration;
  }

  public static get companyVatNumber(): string {
    return this._vatNumber;
  }
}
