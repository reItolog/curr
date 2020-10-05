export interface RatesData {
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface ExchangeState {
  data: RatesData;
  error: string;
  amount: number;
  from: string;
  to: string;
  loading: boolean;
}
