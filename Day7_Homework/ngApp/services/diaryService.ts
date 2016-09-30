namespace App.Services{
  export class DiaryService{
    private theFirstContent = "The first day can be pretty terrifying for teachers, too. I have been a teacher for 15 years, but I’ve never had a first day of school that wasn’t preceded by at least a tingle of dread. We don’t know the 25 or 150 human beings who will shape our days for the next ten months, and we don’t know their parents. It’s like a yearlong arranged marriage, but with 25 sets of in-laws instead of one.";
    private theSecondContent="  Every year on the second day of school, I talk more than I meant to. I just have so much to tell them—how excited I am to be their teacher, what my class rules are, how they check out books from the class library, how to have a “Peace Talk” when they have a conflict with another student ... it’s a long list.";
    private theLastContent="  Do something on your last day of school that you normally wouldn't do for any other day of school. For example, you could dress in a crazy and cute outfit, wear a cape, do your makeup differently, or do some funny, yet safe stunts."


    private diaries = [
      {id:1, subject:"First day in school", date:"2016/01/01",content: this.theFirstContent},
      {id:2, subject:"Second day in school", date:"2016/01/02",content: this.theSecondContent},
      {id:3, subject:"Last day in school", date:"2016/01/03", content: this.theLastContent},
    ];
    getDiaries(){
      return this.diaries;
    }
    getDiary(id){
      let diaryToReturn;
      for(let d of this.diaries){
        if(d.id == id){
          return d;
        }
      }
    }
  }
  angular.module('MyApp').service('diaryService',DiaryService);
}
