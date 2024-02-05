import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,HighlightDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
