namespace individualProject.Controllers{
    export class MenueContactController{
         message = 'hello from MenueContactController';
         public contries;
         constructor(
             private menueService:individualProject.Services.IMenueService
         ){
             this.contries = menueService.getContriesOnServiceSide();
         }
    }
}
