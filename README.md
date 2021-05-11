# coding-game-voter-display-angular-components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/coding-game-voter-display-angular-components)
coding game exercice code
what is asked is to create an Angular component named DisplayComponent and having display-component for selector.

it must use the VoterComponent component (selector = voter-component) whose code is provided. DisplayComponent has 3 public fields named question, yesAnswer and noAnswer.

they represent a question asked to the user and the possible answer choices displayed in VoterComponent

DisplayComponent must use VoterComponent as a child and must pass it question, yesAnswer and noAnswer as input.

When the user votes, VoterComponent creates a boolean event to an @Output named output.

I have to display the result of the vote in DisplayComponent in a <div> with id = lastVote: If output is true, then we print yesAnswer, otherwise we print noAnswer.
