export interface TelNumber {
  tel: string;
  telPretty: string;
}

export default class CompanyInfo {
  private static readonly _registration: string = '11272002';
  private static readonly _vatNumber: string = '291620212';
  private static readonly _telNumber: string = '+44 (0)115 772 2100';

  public static get companyName(): string {
    return process.env.VUE_APP_NAME;
  }

  public static get companyRegistration(): string {
    return this._registration;
  }

  public static get companyVatNumber(): string {
    return this._vatNumber;
  }

  public static get companyTelNumber(): TelNumber {
    let tel = this._telNumber.replace(/\s+/g, '').replace('(0)', '');

    return { tel: tel, telPretty: this._telNumber };
  }
}
