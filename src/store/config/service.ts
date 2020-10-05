import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import config from '../../shared/config/config.json';

class OptionsService {
  private baseApiUrl = config.apiBaseUrl;

  fetchOptions(base: string): Observable<string[]> {
    return ajax.getJSON(`${this.baseApiUrl}/latest/?base=${base}`).pipe(
      map(({ rates }: any) => Object.keys(rates)),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export default new OptionsService();
