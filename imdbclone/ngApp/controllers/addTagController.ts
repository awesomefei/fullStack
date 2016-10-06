namespace imdbclone.Controllers{
    export class AddTagController{
        public message = 'hello from AddTagController';
        public tags;
        public movies;
        public tag;
        public tagId;
        constructor(
            private tagService : imdbclone.Services.TagService,
        ){
            this.getTags();
        }
        getTag(){
            this.tagService.getTagOnservice()
        }
        getTags(){
            this.tags = this.tagService.getTagsOnService();
        }
        saveTag(){
            this.tagService.saveItemOnService(this.tag);
        }
    }
}
