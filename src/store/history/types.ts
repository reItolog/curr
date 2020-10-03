export interface HistoryRates {
  [date: string]: {
    carrency: string;
  };
}

export interface HistoryData {
  rates: HistoryRates | Record<string, unknown>;
  start_at: string;
  base: string;
  end_at: string;
}

export interface HistoryState {
  startAt: string;
  endAt: string;
  data: HistoryData;
  loading: boolean;
  error: string;
}
