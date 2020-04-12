export interface TelNumber {
  tel: string;
  telPretty: string;
}

export interface WebDomain {
  url: string;
  secureUrl: string;
}

export default class CompanyInfo {
  private static readonly _name: string = process.env.VUE_APP_NAME;
  private static readonly _websiteDomain: string = process.env.VUE_APP_DOMAIN;
  private static readonly _registration: string = "11272002";
  private static readonly _vatNumber: string = "291620212";
  private static readonly _telNumber: string = "+44 (0)115 772 2100";
  private static readonly _email: string = "info@tmdip.co.uk";
  private static readonly _safeContractorAccreditation: string = "DQ7779";
  private static readonly _icoCertificateNumber: string = "ZA469003";

  public static get companyWebsiteDomain(): WebDomain {
    return {
      url: this._websiteDomain.replace("https://", ""),
      secureUrl: this._websiteDomain
    }
  }

  public static get companyName(): string {
    return this._name;
  }

  public static get companyNameWithLtd(): string {
    return this.companyName + " Ltd";
  }

  public static get companyRegistration(): string {
    return this._registration;
  }

  public static get companyVatNumber(): string {
    return this._vatNumber;
  }

  public static get companyTelNumber(): TelNumber {
    const tel = this._telNumber.replace(/\s+/g, "").replace("(0)", "");

    return { tel: tel, telPretty: this._telNumber };
  }

  public static get companyEmail(): string {
    return this._email;
  }

  public static get companySafeContractorAccreditation(): string {
    return this._safeContractorAccreditation;
  }

  public static get companyIcoCertificateNumber(): string {
    return this._icoCertificateNumber;
  }
}
