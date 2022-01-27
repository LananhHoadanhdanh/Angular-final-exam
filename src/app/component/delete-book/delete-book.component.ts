import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book?: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.bookService.findById(id).subscribe(res => {
        console.log(res)
        this.book = res
      })
    })
  }

  deleteBook() {
    // @ts-ignore
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      alert("Xóa thành công!")
      this.router.navigate(["/books"])
    })
  }

}
