import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL);
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL, book);
  }

  findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/${id}`);
  }

  updateBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/${id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete<Book>(`${API_URL}/${id}`);
  }
}
