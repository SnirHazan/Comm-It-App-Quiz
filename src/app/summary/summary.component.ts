import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserDataService} from '../user-data.service';
import {QuestionService} from '../question.service';
import { Question } from '../questions-paging/question.modal';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  score: number;
  userName: string;
  questions: Question [];
  userAnswers: {};
  constructor(private route: ActivatedRoute, private userDataSer: UserDataService,
              private questionSer: QuestionService) { }

  ngOnInit() {
    this.score = parseInt(this.route.snapshot.queryParamMap.get('Score'), 10);
    this.userName = this.route.snapshot.queryParamMap.get('Name');
    this.questionSer.getQuestions()
      .subscribe(data => {
        this.questions = data;
      });
    this.userAnswers = this.userDataSer.getUserAnswers();
  }

}
