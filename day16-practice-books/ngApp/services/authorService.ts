namespace day16_practice_books.Services{
    export class AuthorService{
        private authorResource;
        constructor(
            private $resource: ng.resource.IResourceService
        ){
            this.authorResource = this.$resource('/api/authors/:id');
        }
        getAuthors(){
            return this.authorResource.query();
        }
    }
    angular.module('day16_practice_books').service('authorService', AuthorService);
}
