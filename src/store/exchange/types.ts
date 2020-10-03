export interface Rates {
  currency: number;
}

export interface RatesData {
  base: string;
  date: string;
  rates: Rates | Record<string, unknown>;
}

export interface ExchangeState {
  data: RatesData;
  error: string;
  loading: boolean;
}
