import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message';

const URL_API = 'https://api.adviceslip.com/advice';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  get(): Observable<Message> {
    return this.http.get<any>(`${URL_API}`).pipe(map((ret) => ret.slip));
  }
}
