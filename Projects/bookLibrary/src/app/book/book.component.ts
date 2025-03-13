import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() title = '';
  @Input() image = '';
}
