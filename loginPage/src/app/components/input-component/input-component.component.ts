import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  standalone: false,
  
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponentComponent {

  @Input() IconMaterialName = "";
  @Input() placeHolder = "";
  @Input() inputType = "";

}
