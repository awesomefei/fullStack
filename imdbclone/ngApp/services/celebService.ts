namespace imdbclone.Services{
    export class CelebService{
        private celebResource;
        constructor(
            $resource:ng.resource.IResourceService,
        ){
            this.celebResource = $resource('/api/celebs/:id', null, {
                saveComment:{
                    method:'PUT',
                    url:'/api/celebs/comments/:celebId'
                },
                edit:{
                    method:"PUT",
                    url:'/api/celebs'
                }
            });

        }
        editCelebOnService(celeb){
            return this.celebResource.edit(celeb).$promise;
        }
        getCelebsOnService(){
            return this.celebResource.query();
        }
        getCelebOnService(id){
            return this.celebResource.get({id:id});
        }
        // getTagsOnService(){
        //     return this.celebResource.
        // }
        saveCelebOnService(celeb){
            return this.celebResource.save(celeb).$promise;
        }
        deleteCelebOnService(id){
            return this.celebResource.delete({id:id}).$promise;
        }
        saveComment(comment, celebId){
            return this.celebResource.saveComment(comment, {id:celebId}).$promise;
        }
    }

    angular.module('imdbclone').service('celebService', CelebService);

}
