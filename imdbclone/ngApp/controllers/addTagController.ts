namespace imdbclone.Controllers{
    export class AddTagController{
        public message = 'hello from AddTagController';
        public tags;
        public movies;
        constructor(
            private tagService : imdbclone.Services.TagService,
        ){
            this.getTags();
        }
        getTags(){
            this.tags = this.tagService.getTagsOnService();
        }
    }
}
