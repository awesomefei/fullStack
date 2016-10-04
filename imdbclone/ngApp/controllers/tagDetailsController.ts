namespace imdbclone.Controllers{
    export class TagDetailsController{
        public message = 'hello from TagDetailsController';
        public tag;
        public movies;
        constructor(
            private tagId,
            private tagService : imdbclone.Services.TagService,
        ){
            this.getTag();
        }

        getTag(){
            this.tag = this.tagService.getTagOnservice(this.tagId);
        }
    }
}
