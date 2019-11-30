export class AsTokenizedDerivative {
  derivativeAddress: string;
  marginCurrencyAddress: string;
  marginCurrencySymbol: string;
  marginCurrencyDecimals: i32;
  marginCurrencyName: string;
}

export const tokenizedDerivatives: Array<AsTokenizedDerivative> = [];
