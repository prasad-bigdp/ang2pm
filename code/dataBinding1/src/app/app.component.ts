import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "PRASAD";
  title='';
  fun() {
    console.log("hello");
    this.name="hello"
  }
}
