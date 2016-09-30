namespace App.Controllers{
  export class DiaryController{
    public diaries;
    public message = "Hello from the DiaryController";
    constructor(private diaryService:App.Services.DiaryService){
      this.diaries = this.diaryService.getDiaries();
    }
  }

  
  export class DiaryDetailsController{
    public diary;
    constructor(
      private $stateParams:ng.ui.IStateParamsService,
      private diaryService:App.Services.DiaryService){

      let diaryId = this.$stateParams['id'];
      this.diary = this.diaryService.getDiary(diaryId);

    }
  }

}
