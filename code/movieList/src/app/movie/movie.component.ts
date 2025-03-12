import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() name = '';
  @Input() imgUrl = '';
}
