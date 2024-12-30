import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

// Guard function
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // Get the value of 'ce' from localStorage
  const ceValue = localStorage.getItem('ce');
  const allowedEmails: string[] = ['singhapolomi@gmail.com', 'rrouth77@gmail.com'];
  console.log(ceValue);
  
  // Validate the 'ce' value
  if (ceValue && ceValue !== 'null' && ceValue !== '') {
    if (allowedEmails.includes(ceValue)) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
    // return true; // Allow navigation
  } else {
    router.navigate(['/login']); // Redirect to login page
    return false; // Prevent navigation
  }
};
