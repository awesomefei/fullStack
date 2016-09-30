namespace day16_practice_books.Controllers{
    export class BookController{
        public books;
        constructor(
            private bookService: day16_practice_books.Services.BookService
        ){
            this.getBooks();
        }
        getBooks(){
            this.books = this.bookService.getBooks();
        }
    }
}
