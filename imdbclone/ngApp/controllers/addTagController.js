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
            AddTagController.prototype.getTag = function () {
                this.tagService.getTagOnservice();
            };
            AddTagController.prototype.getTags = function () {
                this.tags = this.tagService.getTagsOnService();
            };
            AddTagController.prototype.saveTag = function () {
                this.tagService.saveItemOnService(this.tag);
            };
            return AddTagController;
        }());
        Controllers.AddTagController = AddTagController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
