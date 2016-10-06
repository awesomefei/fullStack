var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var TagService = (function () {
            function TagService($resource) {
                this.tagResource = $resource('/api/tags/:id');
            }
            TagService.prototype.getTagsOnService = function () {
                return this.tagResource.query();
            };
            TagService.prototype.getTagOnservice = function (tagId) {
                return this.tagResource.get({ id: tagId });
            };
            TagService.prototype.saveItemOnService = function (tag) {
                return this.tagResource.save(tag).$promise;
            };
            return TagService;
        }());
        Services.TagService = TagService;
        angular.module('imdbclone').service('tagService', TagService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
