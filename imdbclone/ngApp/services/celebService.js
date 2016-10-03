var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var CelebService = (function () {
            function CelebService($resource) {
                this.celebResource = $resource('/api/celebs/:id', null, {
                    saveComment: {
                        method: 'PUT',
                        url: '/api/celebs/comments/:celebId'
                    },
                    edit: {
                        method: "PUT",
                        url: '/api/celebs'
                    }
                });
            }
            CelebService.prototype.editCelebOnService = function (celeb) {
                return this.celebResource.edit(celeb).$promise;
            };
            CelebService.prototype.getCelebsOnService = function () {
                return this.celebResource.query();
            };
            CelebService.prototype.getCelebOnService = function (id) {
                return this.celebResource.get({ id: id });
            };
            CelebService.prototype.saveCelebOnService = function (celeb) {
                return this.celebResource.save(celeb).$promise;
            };
            CelebService.prototype.deleteCelebOnService = function (id) {
                return this.celebResource.delete({ id: id }).$promise;
            };
            CelebService.prototype.saveComment = function (comment, celebId) {
                return this.celebResource.saveComment(comment, { id: celebId }).$promise;
            };
            return CelebService;
        }());
        Services.CelebService = CelebService;
        angular.module('imdbclone').service('celebService', CelebService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
