import {Injectable} from '@angular/core';

@Injectable()
export class UserDataService {
  fullName: string;
  userAnswers: {};
  constructor() {
  }

  setFullName(name: string) {
    this.fullName = name;
    console.log('User Name:', this.fullName);
  }
  getFullName() {
    return this.fullName;
  }

  setUserAnswer(answers) {
    this.userAnswers = answers;
  }

  getUserAnswers() {
    return this.userAnswers ;
  }
}
