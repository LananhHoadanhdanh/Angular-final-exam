import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListBookComponent } from './component/list-book/list-book.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BookDetailComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
