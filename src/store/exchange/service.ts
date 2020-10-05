import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import queryString, { StringifiableRecord } from 'query-string';

import config from '../../shared/config/config.json';

interface RatesPayload extends StringifiableRecord {
  base: string;
  symbols: string;
}

class ExchangeService {
  private baseApiUrl = config.apiBaseUrl;

  getRates(payload: RatesPayload): Observable<any> {
    const queryParams = queryString.stringify(payload);

    return ajax.getJSON(`${this.baseApiUrl}/latest/?${queryParams}`).pipe(
      map((data) => data),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export default new ExchangeService();
