namespace imdbclone.Controllers{
    export class TagDetailsController{
        public message = 'hello from TagDetailsController';
        public tag;
        public tags;
        public movies;
        constructor(
            private tagId,
            private tagService : imdbclone.Services.TagService,
        ){
            this.getTag();
        }
        getTags(){
            this.tags = this.tagService.getTagsOnService();
        }

        getTag(){
            this.tag = this.tagService.getTagOnservice(this.tagId);
        }
    }
}
