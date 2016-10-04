namespace imdbclone.Services{
    export class TagService{
        private tagResource;
        constructor(
            $resource:ng.resource.IResourceService
        ){
            this.tagResource=$resource('/api/tags/:id', null ,{
                saveTag:{
                    method:'POST',
                    url:'/api/tags/addmovie/:tagId'
                },
            });
        }
        getTagsOnService(){
            return this.tagResource.query();
        }
        getTagOnservice(tagId){
            return this.tagResource.get({id:tagId});
        }
    //    getTagContentsOnservice(){
            //return this.tagResource.query();
    //    }
    }

    angular.module('imdbclone').service('tagService',TagService);
}
