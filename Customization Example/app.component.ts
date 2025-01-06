import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // title and Logo of the website
  title = "";
  websiteLogo = "assets/logoV1.png";
  

  // Background Color (Right side and left side)
  rightSectionColor =  "#5a2e86";
  leftSectionColor = "#ffffff";

  // Text of title and subtitle
  loginMessage = "Log in to your Account";
  subMessage = "You're back ! Select a method to log in: ";


  // 2 Login Button (google,facebook,microsoft etc....)
  textButton1 = "Google";
  iconSrc1 = "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg";

  textButton2 = "Microsoft";
  iconSrc2 = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg";


  // Final Log in Button
  finalTextButton = "Log in";
  LogButtonColor = "#5a2e86";
  LogButtonHover = "#4a2570";


  //First Input
  IconMaterial1 = "mail_outline";
  placeHolder1 = "Email address";
  inputType1 = "email";

  //Second Input
  placeHolder2 = "Password";
  inputType2 = "password";
  IconMaterial2 = "lock_outline";

  // Selectbox "Remember me"
  selectBoxColor = "#5a2e86";

  // forgot Password Text
  forgotPassColor = "#5a2e86";

  // create an Account text
  createAccountColor = "#5a2e86";

  // image and text in the right side
  rightImage = "assets/phoneImage.png";
  rightText = "Reliable SMS Gateway";
  rightSubText = "Ensure fast, secure, and reliable SMS delivery worldwide.";

}
