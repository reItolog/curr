import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import config from '../../shared/config/config.json';

class OptionsService {
  private baseApiUrl = config.apiBaseUrl;

  fetchOptions(): Observable<string[]> {
    return ajax.getJSON(`${this.baseApiUrl}/latest`).pipe(
      map(({ rates }: any) => Object.keys(rates)),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export default new OptionsService();
