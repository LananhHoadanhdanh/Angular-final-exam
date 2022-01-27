import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.bookService.getAll().subscribe(res => {
      this.books = res
      console.log(res)
    })
  }
}
