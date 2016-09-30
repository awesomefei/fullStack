namespace App.Services {
  export class TaxService{
      CalculateTax(price){
        return price * 0.08;
      }
  }

  angular.module('CoolDesk').service('taxService', TaxService);

}
