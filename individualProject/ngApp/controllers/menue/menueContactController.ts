namespace individualProject.Controllers{
    export class MenueContactController{
         message = 'hello from MenueContactController';
         public contries;
         constructor(
             private menueService:individualProject.Services.IMenueService
         ){
             console.log("in MenueContactController's constructor");
             this.contries = menueService.getContriesOnServiceSide();
             console.log(this.contries);
         }
    }
}
