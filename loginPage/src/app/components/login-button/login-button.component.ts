import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-login-button',
  standalone: false,
  
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {

  @Input() textButton : string = "texte";
  @Input() iconSrc : string = "link";
}
