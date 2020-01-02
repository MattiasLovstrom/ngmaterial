import { Component } from '@angular/core';
import { QuestionService } from './dynamic-form/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  title = 'test-material';

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
