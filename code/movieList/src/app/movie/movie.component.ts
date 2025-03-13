import { Component,Input } from '@angular/core';

@Component({
  selector: 'raja-prasad',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() name = '';
  @Input() imgUrl = '';
}
