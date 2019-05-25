import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Question} from './questions-paging/question.modal';

@Injectable()
export class QuestionService {
  private url = './assets/data/questions.json';
  constructor(private httpClient: HttpClient) {
  }
  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.url);
  }
}
