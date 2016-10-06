namespace imdbclone.Services{
    export class TagService{
        private tagResource;
        constructor(
            $resource:ng.resource.IResourceService
        ){
            this.tagResource=$resource('/api/tags/:id')

            }
        getTagsOnService(){
            return this.tagResource.query();
        }
        getTagOnservice(tagId){
            return this.tagResource.get({id:tagId});
        }
        saveItemOnService(tag){
            return this.tagResource.save(tag).$promise;
        }
    //    getTagContentsOnservice(){
            //return this.tagResource.query();
    //    }
    }

    angular.module('imdbclone').service('tagService',TagService);
}
