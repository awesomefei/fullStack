namespace day16_practice_books.Services{
    export class BookService{
        public bookResource;
        constructor(
            private $resource: ng.resource.IResourceService
        ){
            this.bookResource= this.$resource('/api/books/:id', null, {
                edit:{
                    method:'PUT',
                    url: '/api/books'
                },
                addAuthor:{
                    method:'POST',

                    //????????
                    url:'/api/books/addAuthor/:bookId'
                }
            });
        }

        getBooks(){
            return this.bookResource.query();
        }

        getBook(id){
            return this.bookResource.get({id:id});
        }

        saveBook(book){
            return this.bookResource.edit(book).$promise;
        }
        deleteBook(bookId){
            return this.bookResource.delete({id:bookId}).$promise;
        }
        addAuthor(bookId, authorId){
            return this.bookResource.addAuthor({bookId:bookId}, {authorId:authorId}).$promise;
        }

    }
    angular.module('day16_practice_books').service('bookService', BookService);
}
