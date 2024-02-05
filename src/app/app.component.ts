import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StringgPipe } from './stringg.pipe';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';

StringgPipe
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StringgPipe,ChildComponent,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-5';
  inputData:string="";
  Name:string="";

  sData(input: string){
    console.log("yes");
    this.Name=input;
  }
  
}
