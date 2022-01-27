import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  });

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
        this.bookForm = new FormGroup({
          title: new FormControl(res.title),
          author: new FormControl(res.author),
          description: new FormControl(res.description),
        });
      })
    })
  }

  updateBook() {
    const book = this.bookForm.value;
    console.log(book)
    // @ts-ignore
    this.bookService.updateBook(this.book.id, book).subscribe(() => {
      alert("Sửa thành công!")
      this.router.navigate(["/books"])
    })
  }

}
