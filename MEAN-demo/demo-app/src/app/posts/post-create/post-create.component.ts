import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PosCreateComponent {
  onAddPost() {
    console.log('Post Added!');
  }
}
