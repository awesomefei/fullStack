namespace day16_practice_books.Controllers{
    export class BookAddAuthorController{
        private bookId;
        public authors;

        constructor(
            private $stateParams:ng.ui.IStateParamsService,
            private authorService: day16_practice_books.Services.AuthorService,
            private bookService:day16_practice_books.Services.BookService,
            private $state:ng.ui.IStateService
        ){
            this.bookId = this.$stateParams['id'];
            this.getAuthors();
        }
        getAuthors(){
            this.authors = this.authorService.getAuthors();
        }
        addAuthorToBook(authorId){
            this.bookService.addAuthor(this.bookId, authorId)
            .then(() =>{
                this.$state.go('bookDetail', {id:this.bookId});
            })
            .catch(() =>{
                console.log("something went wrong in BookAddAuthorController");
            })
        }
    }
}
