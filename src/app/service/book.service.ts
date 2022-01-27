import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const URL_AIP = ''
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
}
