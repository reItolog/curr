import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import queryString from 'query-string';

import config from '../../shared/config/config.json';

interface HistoryPayload {
  symbols: string;
  startAt: string;
  endAt: string;
  base: string;
}

class HistoryService {
  private baseApiUrl = config.apiBaseUrl;

  getHistory(payload: HistoryPayload): Observable<any> {
    const queryParams = queryString.stringify(payload);

    return ajax.getJSON(`${this.baseApiUrl}/history/?${queryParams}`).pipe(
      map((data) => data),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export default new HistoryService();
