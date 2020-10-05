export interface Rates {
  currency: number;
}

export interface RatesData {
  base: string;
  date: string;
  rates: any;
}

export interface ExchangeState {
  data: RatesData;
  error: string;
  amount: number;
  from: string;
  to: string;
  loading: boolean;
}
