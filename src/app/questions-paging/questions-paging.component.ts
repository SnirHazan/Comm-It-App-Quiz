import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Question} from './question.modal';
import {Router} from '@angular/router';
import {QuestionService} from '../question.service';
import {UserDataService} from '../user-data.service';


@Component({
  selector: 'app-questions-paging',
  templateUrl: './questions-paging.component.html',
  styleUrls: ['./questions-paging.component.css']
})
export class QuestionsPagingComponent implements OnInit {
  currentQuestion: Question;
  currentIndexQuestion: number;
  progressBarIndex: number;
  questions: Question [];
  selectedAnswer = '';
  userAnswers = {};
  isLoading: boolean;
  finish: boolean;

  constructor(public router: Router, public questionSer: QuestionService, public userDataSer: UserDataService) {
  }

  ngOnInit() {
    this.questionSer.getQuestions()
      .subscribe(data => {
        this.questions = data;
        console.log(this.questions);
        this.currentQuestion = this.questions[0];
        this.currentIndexQuestion = 0;
        this.progressBarIndex = 0;
        this.isLoading = false;
        this.finish = false;
      });
  }

  /**
   * This function called when Next button was clicked.
   * @param id - the id of the Next button.
   */
  async onNext(id) {
    if (this.selectedAnswer !== '') {
      this.userAnswers[this.currentIndexQuestion] = this.selectedAnswer;
      this.selectedAnswer = '';
    }
    if (this.currentIndexQuestion < this.questions.length - 1) {
      ++this.currentIndexQuestion;
      ++this.progressBarIndex;
      this.currentQuestion = this.questions[this.currentIndexQuestion];
      if (this.currentIndexQuestion === this.questions.length - 1) {
        document.getElementById(id).innerHTML = 'Done';
      }
    } else {
      ++this.progressBarIndex;
      this.finish = true;
      const score = this.calculteScore() * 10;
      this.isLoading = true;
      await this.sleep(2000);
      this.isLoading = false;
      this.userDataSer.setUserAnswer(this.userAnswers);
      this.router.navigate(['/Summary'], {queryParams: {Score: score, Name: this.userDataSer.getFullName()}});
    }
  }
  /**
   * This function calculate the score of the player.
   */
  calculteScore() {
    let score = 0;
    for (const key in this.userAnswers) {
      if (this.userAnswers.hasOwnProperty(key)) {
          if (this.userAnswers[key] === this.questions[parseInt(key, 10)].rightAnswer) {
            score++;
          }
      }
    }
    return score;
  }
  /**
   * This function called when Prev button was clicked.
   * @param id - the id of the Next buttons.
   */
  onPrev(id) {
    document.getElementById(id).innerHTML = 'Next';
    if (this.currentIndexQuestion > 0) {
      --this.currentIndexQuestion;
      --this.progressBarIndex;
      this.currentQuestion = this.questions[this.currentIndexQuestion];
    } else {
      console.log('First!');
    }
    console.log(this.currentIndexQuestion);
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  answerWasChosen(i: number) {
    this.selectedAnswer = this.currentQuestion.optionalanswers[i];
  }
}
