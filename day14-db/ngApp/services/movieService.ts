namespace day14_db.Services {
    export class MovieServoce{
        public movieResource;

        constructor(
            private $resource: ng.resource.IResourceService,

        )
        {

        }

    }


    angular.module('day14_db').service('movieRouter', MovieServoce);
    }
