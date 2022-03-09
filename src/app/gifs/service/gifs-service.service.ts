import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGiftResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!);
    this.resultados = JSON.parse(localStorage.getItem('lastSearhc')!);
  }

  private _historial: string[] = [];
  private apikey: string = 'A1EoHQ15KiKUYjmsk5xgmVWV1LT2yjeL';
  public resultados: Gif[] = [];
  private url: string = 'https://api.giphy.com/v1/gifs';

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    console.log(this._historial);

    /** Dos formas de hacer una petición http en javascript
     * FORMA 1
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=A1EoHQ15KiKUYjmsk5xgmVWV1LT2yjeL&q=los simpsons&limit=10'
    ).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
      });
    });
    
    ///FORMA 2 

     const resp = await fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=A1EoHQ15KiKUYjmsk5xgmVWV1LT2yjeL&q=los simpsons&limit=10'
    );
    const data = await resp.json();
    console.log(data);
    */

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('q', query)
      .set('limit', '10');

    console.log(params.toString());
    this.http
      .get<SearchGiftResponse>(`${this.url}/search`, { params })
      .subscribe((response) => {
        console.log(response.data);

        this.resultados = response.data;
        localStorage.setItem('lastSearhc', JSON.stringify(this.resultados));
      });
  }
}
