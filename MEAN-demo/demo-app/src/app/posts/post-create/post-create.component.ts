import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PosCreateComponent {
  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.log(postInput.value);
    this.newPost = 'The user\'s post';
  }
}
