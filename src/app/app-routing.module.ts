import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./component/list-book/list-book.component";
import {CreateBookComponent} from "./component/create-book/create-book.component";
import {UpdateBookComponent} from "./component/update-book/update-book.component";
import {BookDetailComponent} from "./component/book-detail/book-detail.component";
import {DeleteBookComponent} from "./component/delete-book/delete-book.component";

const routes: Routes = [
  { path: 'books', component: ListBookComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'books/:id/update', component: UpdateBookComponent },
  { path: 'books/:id/delete', component: DeleteBookComponent },
  { path: 'books/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
