import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  imgUrl: string = '';
  imgUrl1 = '';
  name: string = '';
  name1 = '';
  name2: string = '';
  name3 = '';
  handleSubmit() {
    this.imgUrl1 = this.imgUrl;
    this.name1 = this.name;
    this.name3 = this.name2;
  }
}
