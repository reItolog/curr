import { DateType } from '../../shared/interfaces/exchange';

export interface HistoryRates {
  [date: string]: {
    carrency: string;
  };
}

export interface HistoryData {
  rates: HistoryRates | Record<string, unknown>;
  start_at: DateType;
  base: string;
  end_at: DateType;
}

export interface HistoryState {
  startAt: DateType;
  endAt: DateType;
  data: HistoryData;
  loading: boolean;
  error: string;
}
