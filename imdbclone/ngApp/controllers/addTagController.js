var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var AddTagController = (function () {
            function AddTagController(tagService) {
                this.tagService = tagService;
                this.message = 'hello from AddTagController';
                this.getTags();
            }
            AddTagController.prototype.getTags = function () {
                this.tags = this.tagService.getTagsOnService();
            };
            return AddTagController;
        }());
        Controllers.AddTagController = AddTagController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
