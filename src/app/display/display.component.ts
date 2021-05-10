import {
  Component,
  Input,
  NgModule,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'display-component',
  template: `
    <div id="lastVote">{{ answer }}</div>
    <voter-component
      [question]="question"
      [yesAnswer]="yesAnswer"
      [noAnswer]="noAnswer"
      (output)="setVote($event)"
    ></voter-component>
  `
})
export class DisplayComponent {
  public question = 'Too easy?';
  public yesAnswer = 'Yes';
  public noAnswer = 'no';
  public answer;
  setVote(event) {
    if (event === true) {
      this.answer = this.yesAnswer;
    } else {
      this.answer = this.noAnswer;
    }
  }
}
