import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import config from '../../shared/config/config.json';

class OptionsService {
  private baseApiUrl = config.apiBaseUrl;

  fetchOptions(base: string): Observable<string[]> {
    return ajax.getJSON(`${this.baseApiUrl}/latest/?base=${base}`).pipe(
      map(({ rates }: any) => {
        const ratesResult = Object.keys(rates);
        console.log(  Object.keys(rates));
        ratesResult.push(base);
        return ratesResult;
      }),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export default new OptionsService();
