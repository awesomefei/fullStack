var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var TagService = (function () {
            function TagService($resource) {
                this.tagResource = $resource('/api/tags/:id', null, {
                    saveTag: {
                        method: 'POST',
                        url: '/api/tags/addmovie/:tagId'
                    },
                });
            }
            TagService.prototype.getTagsOnService = function () {
                return this.tagResource.query();
            };
            TagService.prototype.getTagOnservice = function (tagId) {
                return this.tagResource.get({ id: tagId });
            };
            return TagService;
        }());
        Services.TagService = TagService;
        angular.module('imdbclone').service('tagService', TagService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
