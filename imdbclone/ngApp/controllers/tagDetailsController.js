var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var TagDetailsController = (function () {
            function TagDetailsController(tagId, tagService) {
                this.tagId = tagId;
                this.tagService = tagService;
                this.message = 'hello from TagDetailsController';
                this.getTag();
            }
            TagDetailsController.prototype.getTags = function () {
                this.tags = this.tagService.getTagsOnService();
            };
            TagDetailsController.prototype.getTag = function () {
                this.tag = this.tagService.getTagOnservice(this.tagId);
            };
            return TagDetailsController;
        }());
        Controllers.TagDetailsController = TagDetailsController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
