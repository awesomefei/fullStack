namespace day20.Services{
    export class MovieService{
        private movies =[
            {id : '1', title:"Star Wars 1", director:'Lucas'},
            {id : '2',title:"Star Wars 2", director:'Lucas'},
            {id : '3',title:"Star Wars 3", director:'Lucas'},
            {id : '4',title:"Star Wars 4", director:'Lucas'},
            {id : '5',title:"Star Wars 5", director:'Lucas'},

        ];
        public getMovieOnService(id){
            return this.movies.filter((elm)=>{
                    return elm.id =id;
            })[0];
        }

        public getMoviesOnService(){
            return this.movies;
        }

    }
    angular.module('day20').service('movieService', MovieService);
}
