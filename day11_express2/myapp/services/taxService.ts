
export default class TaxService{
        public static calculator(amount: number){
            return amount * 0.08;

        }
}


var res = TaxService.calculator(1000);
