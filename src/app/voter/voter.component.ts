import {
  Component,
  Input,
  NgModule,
  Output,
  EventEmitter
} from '@angular/core';
@Component({
  selector: 'voter-component',
  template: `
    {{ question }}
    <button (click)="vote(true)">{{ yesAnswer }}</button>
    <button (click)="vote(false)">{{ noAnswer }}</button>
  `
})
export class VoterComponent {
  @Input()
  public question: string;

  @Input()
  public yesAnswer: string;

  @Input()
  public noAnswer: string;

  @Output()
  public output = new EventEmitter<boolean>();

  public vote(vote: boolean): void {
    this.output.emit(vote);
  }
}
