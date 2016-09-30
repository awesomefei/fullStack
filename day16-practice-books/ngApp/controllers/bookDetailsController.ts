namespace day16_practice_books.Controllers{
    export class BookDetailsController{
        public book;
        public bookId;
        constructor(
            private bookService: day16_practice_books.Services.BookService,
            private $stateParams:ng.ui.IStateParamsService,
        ){
            //?????????????????????????????
            this.bookId = this.$stateParams['id'];
            this.getBook();
        }
        getBook(){
            this.book = this.bookService.getBook(this.bookId);
        }
    }
}
