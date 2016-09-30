var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var DiaryController = (function () {
            function DiaryController(diaryService) {
                this.diaryService = diaryService;
                this.message = "Hello from the DiaryController";
                this.diaries = this.diaryService.getDiaries();
            }
            return DiaryController;
        }());
        Controllers.DiaryController = DiaryController;
        var DiaryDetailsController = (function () {
            function DiaryDetailsController($stateParams, diaryService) {
                this.$stateParams = $stateParams;
                this.diaryService = diaryService;
                var diaryId = this.$stateParams['id'];
                this.diary = this.diaryService.getDiary(diaryId);
            }
            return DiaryDetailsController;
        }());
        Controllers.DiaryDetailsController = DiaryDetailsController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
