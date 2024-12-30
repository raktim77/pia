import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''; // Two-way binding for email input
  emailError: string | null = null; // Error message state
  constructor(private router:Router) {

  }
  // Array of allowed emails
  allowedEmails: string[] = ['singhapolomi@gmail.com', 'rrouth77@gmail.com'];

  onSubmit(): void {
    // Check if the email exists in the allowed emails array
    if (this.allowedEmails.includes(this.email)) {
      this.emailError = null;
      localStorage.setItem('ce',this.email ) 
      this.router.navigate(['welcome'])  
    } else {
      this.emailError = 'Invalid email. Please try again.';
      // alert(this.emailError)
    }
  }

}
